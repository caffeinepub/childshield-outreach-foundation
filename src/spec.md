# Specification

## Summary
**Goal:** Add Bitcoin (BTC) donation details to the landing page “Get Involved” → “Donate” option.

**Planned changes:**
- Update the “Donate” UI in the “Get Involved” section to display a clearly labeled BTC address when configured.
- Add a “Copy address” control for the BTC address with user feedback after copying (e.g., “Copied”).
- Add a clear fallback message when no BTC address is configured so no invalid address is shown.
- Optionally display a client-generated QR code for the configured BTC address within the donation UI.
- Ensure the donation UI controls (open/close, copy, etc.) are keyboard accessible and have appropriate accessible labels.

**User-visible outcome:** Visitors can view and copy a BTC donation address (and optionally scan a QR code) from the landing page donation option on mobile and desktop; if not available, they see a clear “not available yet” message.
