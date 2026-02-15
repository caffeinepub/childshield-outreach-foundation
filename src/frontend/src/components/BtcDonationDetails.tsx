import { useState } from 'react';
import { Copy, Check, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateBtcQrCode, svgToDataUrl } from '@/lib/btcQr';
import { donationConfig } from '@/config/donations';

export function BtcDonationDetails() {
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const btcAddress = donationConfig.btcAddress;
  const hasAddress = btcAddress && btcAddress.trim().length > 0;

  const handleCopy = async () => {
    if (!hasAddress) return;

    try {
      await navigator.clipboard.writeText(btcAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const qrCodeSvg = hasAddress ? generateBtcQrCode(btcAddress) : '';
  const qrCodeDataUrl = hasAddress ? svgToDataUrl(qrCodeSvg) : '';

  if (!hasAddress) {
    return (
      <div className="p-6 rounded-xl bg-muted/50 border border-border">
        <p className="text-sm text-muted-foreground text-center">
          Bitcoin donation address is not configured yet. Please check back soon or contact us for alternative donation methods.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="p-6 rounded-xl bg-card border border-border">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="btc-address"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              Bitcoin (BTC) Address
            </label>
            <div className="flex gap-2">
              <input
                id="btc-address"
                type="text"
                value={btcAddress}
                readOnly
                className="flex-1 px-4 py-2 text-sm bg-muted border border-input rounded-lg font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="Bitcoin donation address"
              />
              <Button
                onClick={handleCopy}
                variant="outline"
                size="default"
                className="shrink-0"
                aria-label={copied ? 'Address copied' : 'Copy address to clipboard'}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              onClick={() => setShowQr(!showQr)}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
              aria-expanded={showQr}
              aria-controls="qr-code-container"
            >
              <QrCode className="w-4 h-4 mr-2" />
              {showQr ? 'Hide' : 'Show'} QR Code
            </Button>
          </div>

          {showQr && (
            <div
              id="qr-code-container"
              className="flex justify-center p-4 bg-white rounded-lg"
              role="img"
              aria-label="QR code for Bitcoin donation address"
            >
              <img
                src={qrCodeDataUrl}
                alt="Bitcoin address QR code"
                className="w-48 h-48"
              />
            </div>
          )}
        </div>
      </div>

      <div className="text-xs text-muted-foreground text-center space-y-1">
        <p>Scan the QR code or copy the address to send Bitcoin donations.</p>
        <p>Please verify the address before sending any funds.</p>
      </div>
    </div>
  );
}
