import Service, { MakerCreateArg, NFT, TrieList } from '@/ic/ICDexRouter/model';
import { IC_DEX_ROUTER_CANISTER_ID } from '@/ic/utils';
import ICDexRouterIDL from './ICDexRouter.did';
import { Principal } from '@dfinity/principal';
import { fromSubAccountId, SerializableIC } from '@/ic/converter';
import { TokenIdentifier } from '@/ic/nft/model';
import { AccountId } from '@/ic/common/icType';
import { createService } from '@/ic/createService';

export class ICDexRouterService {
  private service: Service;
  private check = async (renew = true, isUpdate = true): Promise<void> => {
    this.service = await createService<Service>(
      IC_DEX_ROUTER_CANISTER_ID,
      ICDexRouterIDL,
      renew,
      isUpdate
    );
  };
  public NFTDeposit = async (
    tokenCollectionId: Principal,
    tokenIdentifier: string,
    subaccountId = 0
  ): Promise<boolean> => {
    await this.check(false, true);
    try {
      let subAccount = [];
      if (subaccountId !== 0) {
        subAccount = [fromSubAccountId(subaccountId)];
      }
      const res = await this.service.NFTDeposit(
        tokenCollectionId,
        tokenIdentifier,
        subAccount
      );
      console.log(res);
      return true;
    } catch (e) {
      console.error(e);
      return null;
    }
  };
  public NFTBindMaker = async (
    tokenIdentifier: string,
    pair: Principal,
    accountId: Array<number>,
    subaccountId = 0
  ): Promise<boolean> => {
    await this.check();
    try {
      let subAccount = [[]];
      if (subaccountId !== 0) {
        subAccount = [fromSubAccountId(subaccountId)];
      }
      const res = await this.service.NFTBindMaker(
        tokenIdentifier,
        pair,
        accountId,
        subAccount
      );
      console.log(res);
      return true;
    } catch (e) {
      console.error(e);
      return null;
    }
  };
  public NFTBalance = async (address: string): Promise<Array<NFT>> => {
    await this.check(false, false);
    try {
      return await this.service.NFTBalance(address);
    } catch (e) {
      console.error(e);
      return null;
    }
  };
  public maker_create = async (
    makerCreateArg: MakerCreateArg
  ): Promise<Principal> => {
    await this.check();
    return await this.service.maker_create(makerCreateArg);
  };
  public NFTWithdraw = async (
    tokenIdentifier: Array<TokenIdentifier>,
    subaccountId = 0
  ): Promise<void> => {
    await this.check();
    try {
      let subAccount = [[]];
      if (subaccountId || subaccountId === 0) {
        subAccount = [fromSubAccountId(subaccountId)];
      }
      return await this.service.NFTWithdraw(tokenIdentifier, subAccount);
    } catch (e) {
      console.error(e);
      return null;
    }
  };
  public NFTBindingMakers = async (
    tokenIdentifier: TokenIdentifier
  ): Promise<Array<[Principal, AccountId]>> => {
    await this.check();
    try {
      const res = await this.service.NFTBindingMakers(tokenIdentifier);
      return SerializableIC(res);
    } catch (e) {
      console.error(e);
      return null;
    }
  };
  public NFTUnbindMaker = async (
    tokenIdentifier: string,
    pair: Principal,
    accountId: Array<number>,
    subaccountId = 0
  ): Promise<boolean> => {
    await this.check();
    try {
      let subAccount = [[]];
      if (subaccountId !== 0) {
        subAccount = [fromSubAccountId(subaccountId)];
      }
      console.log(tokenIdentifier, pair.toString(), accountId);
      const res = await this.service.NFTUnbindMaker(
        tokenIdentifier,
        pair,
        accountId,
        subAccount
      );
      console.log(res);
      return true;
    } catch (e) {
      console.error(e);
      return null;
    }
  };
  public maker_getPublicMakers = async (
    pair: Array<Principal>,
    page: Array<bigint>,
    size: Array<bigint>
  ): Promise<TrieList> => {
    await this.check(false, false);
    try {
      const res = await this.service.maker_getPublicMakers(pair, page, size);
      return SerializableIC(res);
    } catch (e) {
      console.log(e);
      return null;
    }
  };
}