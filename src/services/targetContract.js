module.exports = [
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address'
      }
    ],
    name: 'registry',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'with',
        type: 'uint256'
      },
      {
        name: 'many',
        type: 'address'
      },
      {
        name: 'strange',
        type: 'string'
      },
      {
        name: 'params',
        type: 'uint256'
      }
    ],
    name: 'reallyLongFunctionName',
    outputs: [],
    payable: false,
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'sender',
        type: 'address'
      }
    ],
    name: 'testThrow',
    outputs: [],
    payable: false,
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'sender',
        type: 'address'
      },
      {
        name: 'x',
        type: 'uint256'
      }
    ],
    name: 'register',
    outputs: [],
    payable: false,
    type: 'function'
  }
]
