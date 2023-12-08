import Service, {
  PoolInfo,
  PoolStats,
  ShareWeighted,
  UnitNetValue
} from '@/ic/makerPool/model';
import makerPoolIDL from './makerPool.did';
import { createService } from '@/ic/createService';
import { Icrc1Account } from '@/ic/common/icType';
import { fromSubAccountId, SerializableIC } from '@/ic/converter';

export class makerPoolService {
  public stats2 = async (canisterId: string): Promise<PoolStats> => {
    const service = await createService<Service>(
      canisterId,
      makerPoolIDL,
      false,
      false
    );
    try {
      return await service.stats2();
    } catch (e) {
      console.log(e);
      return null;
    }
  };
  public getDepositAccount = async (
    canisterId: string,
    address: string
  ): Promise<[Icrc1Account, string]> => {
    const service = await createService<Service>(
      canisterId,
      makerPoolIDL,
      false,
      false
    );
    try {
      const res = await service.getDepositAccount(address);
      return SerializableIC(res);
    } catch (e) {
      console.log(e);
      return null;
    }
  };
  public getAccountShares = async (
    canisterId: string,
    address: string
  ): Promise<[bigint, ShareWeighted]> => {
    const service = await createService<Service>(
      canisterId,
      makerPoolIDL,
      false,
      false
    );
    try {
      return await service.getAccountShares(address);
    } catch (e) {
      console.log(e);
      return null;
    }
  };
  public info = async (canisterId: string): Promise<PoolInfo> => {
    const service = await createService<Service>(
      canisterId,
      makerPoolIDL,
      false,
      false
    );
    try {
      const res = await service.info();
      return SerializableIC(res);
    } catch (e) {
      console.log(e);
      return null;
    }
  };
  public add = async (
    canisterId: string,
    token0Amount: bigint,
    token1Amount: bigint,
    subaccountId = 0
  ): Promise<bigint> => {
    const service = await createService<Service>(canisterId, makerPoolIDL);
    let subAccount = [[]];
    if (subaccountId !== 0) {
      subAccount = [fromSubAccountId(subaccountId)];
    }
    return await service.add(token0Amount, token1Amount, subAccount);
  };
  public remove = async (
    canisterId: string,
    shares: bigint,
    subaccountId = 0
  ): Promise<[bigint, bigint]> => {
    const service = await createService<Service>(canisterId, makerPoolIDL);
    let subAccount = [[]];
    if (subaccountId !== 0) {
      subAccount = [fromSubAccountId(subaccountId)];
    }
    return await service.remove(shares, subAccount);
  };
  public getUnitNetValues = async (
    canisterId: string
  ): Promise<{ data: Array<UnitNetValue>; shareUnitSize: bigint }> => {
    const service = await createService<Service>(
      canisterId,
      makerPoolIDL,
      false,
      false
    );
    try {
      return await service.getUnitNetValues();
    } catch (e) {
      console.log(e);
      return null;
    }
  };
  public getAccountVolUsed = async (
    canisterId: string,
    address: string
  ): Promise<bigint> => {
    const service = await createService<Service>(
      canisterId,
      makerPoolIDL,
      false,
      false
    );
    try {
      return await service.getAccountVolUsed(address);
    } catch (e) {
      console.log(e);
      return null;
    }
  };
}