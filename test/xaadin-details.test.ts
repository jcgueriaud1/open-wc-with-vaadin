import { html, fixture, expect } from '@open-wc/testing';

import { XaadinDetails } from '../src/XaadinDetails.js';
import '../xaadin-details.js';

describe('XaadinDetails', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<XaadinDetails>(html`<xaadin-details></xaadin-details>`);

    expect(el.title).to.equal('Hey there');
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<XaadinDetails>(html`<xaadin-details title="attribute title"></xaadin-details>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<XaadinDetails>(html`<xaadin-details></xaadin-details>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
