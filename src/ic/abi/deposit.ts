const abi = [
  {
    inputs: [
      { internalType: 'address', name: '_minterAddress', type: 'address' }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [{ internalType: 'address', name: 'target', type: 'address' }],
    name: 'AddressEmptyCode',
    type: 'error'
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'AddressInsufficientBalance',
    type: 'error'
  },
  { inputs: [], name: 'FailedInnerCall', type: 'error' },
  {
    inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
    name: 'SafeERC20FailedOperation',
    type: 'error'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'erc20ContractAddress',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'principal',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'subaccount',
        type: 'bytes32'
      }
    ],
    name: 'ReceivedEthOrErc20',
    type: 'event'
  },
  {
    inputs: [
      { internalType: 'address', name: 'erc20Address', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'bytes32', name: 'principal', type: 'bytes32' },
      { internalType: 'bytes32', name: 'subaccount', type: 'bytes32' }
    ],
    name: 'depositErc20',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'principal', type: 'bytes32' },
      { internalType: 'bytes32', name: 'subaccount', type: 'bytes32' }
    ],
    name: 'depositEth',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getMinterAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  }
];
export default abi;
