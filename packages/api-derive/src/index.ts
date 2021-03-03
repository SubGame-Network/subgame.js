import { DeriveCustom } from '@polkadot/api-derive';

import * as loan from './loan';
import * as dex from './dex';
import * as homa from './homa';
import * as nft from './nft';
import * as constants from './constants';

export const derive: DeriveCustom = { loan, dex, nft, homa, constants };

export * from './types';
