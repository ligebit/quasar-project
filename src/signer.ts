import { Signer } from '@waves/signer';
import { ProviderTelegram } from 'waves-provider-telegram';

const signer = new Signer({
  // Specify URL of the node
  NODE_URL: 'https://nodes.wavesnodes.com',
});

signer.setProvider(new ProviderTelegram());

export default signer;
