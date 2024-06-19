import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { customFetch } from '../../utils';

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null;
};

const getWithdrawFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('withdraw')) || null;
};

const getDepositFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('deposit')) || null;
};

const getAccountFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('account')) || null;
};

const getAllUsersFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('allUsers')) || null;
};
const getAllNotificationFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('notification')) || null;
};

const getAllWithdrawFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('allWithdraw')) || null;
};

const getAllDepositFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('allDeposit')) || null;
};

const initialState = {
  user: getUserFromLocalStorage(),
  withdraw: getWithdrawFromLocalStorage(),
  deposit: getDepositFromLocalStorage(),
  account: getAccountFromLocalStorage(),
  allUsers: getAllUsersFromLocalStorage(),
  notification: getAllNotificationFromLocalStorage(),
  allWithdraw: getAllWithdrawFromLocalStorage(),
  allDeposit: getAllDepositFromLocalStorage(),
  withdrawBalance: 0,
  balance: 0,
  notificationId: '',
  num: '',
  passport: '',
};

export const loadWithdraw = createAsyncThunk(
  'withdraw/loadWithdraw',
  async (name, thunkAPI) => {
    const user = thunkAPI.getState().userState.user;
    try {
      const resp = await customFetch.get(
        `/withdraw/allPack?user=${user._id}&sort=latest`
      );
      // console.log(resp.data.withdraw);
      thunkAPI.dispatch(addWithdraw(resp.data.withdraw));
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);
export const loadNotification = createAsyncThunk(
  'notification/loadNotification',
  async (name, thunkAPI) => {
    const user = thunkAPI.getState().userState.user;
    try {
      const resp = await customFetch.get(`/notification/allNotification`);
      // console.log(resp.data.withdraw);
      thunkAPI.dispatch(addNotification(resp.data.notification));
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);
export const loadAccount = createAsyncThunk(
  'account/loadAccount',
  async (name, thunkAPI) => {
    const user = thunkAPI.getState().userState.user;
    try {
      const resp = await customFetch.get(`/account/allAccount`);
      // console.log(resp.data.withdraw);
      thunkAPI.dispatch(addAccount(resp.data.account));
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);

export const loadAllUsers = createAsyncThunk(
  'allUsers/loadAllUsers',
  async (name, thunkAPI) => {
    const user = thunkAPI.getState().userState.user;
    try {
      const resp = await customFetch.get(`/auth`);

      thunkAPI.dispatch(addAllUsers(resp.data.users));
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);

export const loadAllWithdrawal = createAsyncThunk(
  'allWithdraw/loadAllWithdraw',
  async (name, thunkAPI) => {
    const user = thunkAPI.getState().userState.user;
    try {
      const resp = await customFetch.get(`/withdraw/allPack`);

      thunkAPI.dispatch(addAllWithdraw(resp.data.withdraw));
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);

export const patchBalance = createAsyncThunk(
  'patchBalance/patchBalance',
  async (name, thunkAPI) => {
    const { user, balance, withdrawBalance } = thunkAPI.getState().userState;

    const totalBalance = balance - withdrawBalance;

    const data = {
      balance: totalBalance,
    };
    try {
      const resp = await customFetch.patch(`/auth/${user._id}`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);
export const loadAllDeposit = createAsyncThunk(
  'allDeposit/loadAllDeposit',
  async (name, thunkAPI) => {
    const user = thunkAPI.getState().userState.user;
    try {
      const resp = await customFetch.get(`/addFund/allAddFund`);

      thunkAPI.dispatch(addAllDeposit(resp.data.addFund));
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);

export const loadDeposit = createAsyncThunk(
  'deposit/loadDeposit',
  async (name, thunkAPI) => {
    const user = thunkAPI.getState().userState.user;
    try {
      const resp = await customFetch.get(
        `/addFund/allAddFund?user=${user._id}&sort=latest`
      );
      // console.log(resp.data.withdraw);
      thunkAPI.dispatch(addDeposit(resp.data.addFund));
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = {
        ...action.payload.user,
        token: action.payload.token,
        otp: action.payload.otp,
      };

      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      state.withdraw = null;
      state.deposit = null;
      state.account = null;
      state.allUsers = null;
      state.notification = null;
      state.allWithdraw = null;
      state.allDeposit = null;
      localStorage.removeItem('emailId');
      localStorage.removeItem('user');
      localStorage.removeItem('allWithdraw');
      localStorage.removeItem('allDeposit');
      localStorage.removeItem('allUsers');
      localStorage.removeItem('account');
      localStorage.removeItem('withdraw');
      localStorage.removeItem('notification');
      localStorage.removeItem('deposit');
    },
    addWithdraw: (state, action) => {
      let user = JSON.parse(localStorage.getItem('user'));
      if (user !== null) {
        const withdraw = { ...action.payload };

        state.withdraw = withdraw;

        localStorage.setItem('withdraw', JSON.stringify(withdraw));
      }
    },
    addAllWithdraw: (state, action) => {
      let user = JSON.parse(localStorage.getItem('user'));
      if (user !== null) {
        const allWithdraw = { ...action.payload };

        state.allWithdraw = allWithdraw;

        localStorage.setItem('allWithdraw', JSON.stringify(allWithdraw));
      }
    },
    addAllDeposit: (state, action) => {
      let user = JSON.parse(localStorage.getItem('user'));
      if (user !== null) {
        const allDeposit = { ...action.payload };

        state.allDeposit = allDeposit;

        localStorage.setItem('allDeposit', JSON.stringify(allDeposit));
      }
    },
    addNotification: (state, action) => {
      let user = JSON.parse(localStorage.getItem('user'));
      if (user !== null) {
        const notification = { ...action.payload };

        state.notification = notification;

        localStorage.setItem('notification', JSON.stringify(notification));
      }
    },
    addAccount: (state, action) => {
      let user = JSON.parse(localStorage.getItem('user'));
      if (user !== null) {
        const account = { ...action.payload };

        state.account = account;

        localStorage.setItem('account', JSON.stringify(account));
      }
    },
    calculateNotification: (state) => {
      let user = JSON.parse(localStorage.getItem('user'));
      if (user !== null) {
        let notification = JSON.parse(localStorage.getItem('notification'));

        // very important
        if (notification !== null) {
          const id = Object.values(notification)[0]._id;

          const filter = Object.values(notification).filter(
            (item) => item.status === 'pending'
          );
          state.num = filter.length;
          state.notificationId = id;
        } else {
          state.notificationId = '';
        }
      }
    },
    calculateAllUsers: (state) => {
      let user = JSON.parse(localStorage.getItem('user'));
      if (user !== null) {
        let allUsers = JSON.parse(localStorage.getItem('allUsers'));
        if (allUsers !== null) {
          const findImage = Object.values(allUsers).filter(
            (item) => item._id === user._id
          );
          state.passport = findImage[0].passport;
        } else {
          state.filterUser = [];
        }
      } else {
        state.passport = '';
      }
    },
    addAllUsers: (state, action) => {
      let user = JSON.parse(localStorage.getItem('user'));
      if (user !== null) {
        const allUsers = { ...action.payload };

        state.allUsers = allUsers;

        localStorage.setItem('allUsers', JSON.stringify(allUsers));
      }
    },

    addDeposit: (state, action) => {
      const deposit = { ...action.payload };

      state.deposit = deposit;

      localStorage.setItem('deposit', JSON.stringify(deposit));
    },

    calculateDeposit: (state) => {
      let deposit = JSON.parse(localStorage.getItem('deposit'));

      // very important
      if (deposit !== null) {
        const total = Object.values(deposit).reduce((acc, curr) => {
          return acc + curr.amount;
        }, 0);

        state.balance = total;
      } else {
        state.balance = 0;
      }
    },

    calculateWithdraw: (state) => {
      let user = JSON.parse(localStorage.getItem('user'));
      if (user !== null) {
        let withdraw = JSON.parse(localStorage.getItem('withdraw'));

        // very important
        if (withdraw !== null) {
          const total = Object.values(withdraw).reduce((acc, curr) => {
            return acc + curr.amount;
          }, 0);

          state.withdrawBalance = total;
        } else {
          state.withdrawBalance = 0;
        }
      }
    },
  },
});

export const {
  loginUser,
  logoutUser,
  addWithdraw,
  addDeposit,
  calculateWithdraw,
  calculateDeposit,
  addAccount,
  addAllUsers,
  addAllDeposit,
  addAllWithdraw,
  addNotification,
  calculateNotification,
  calculateAllUsers,
} = userSlice.actions;
export default userSlice.reducer;
