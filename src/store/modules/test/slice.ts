
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { paginationState, paginationReducer } from '~store/utils';
import { ICodeFilter } from '~interfaces';

const tableAdapter = createEntityAdapter<{}>()

const initialState = {
  isLoading: false,
  filters: {
    code: {
      value: '',
      isLoading: false,
    },
  },
  pagination: paginationState
};

const slice = createSlice({
  name: 'test',
  initialState: tableAdapter.getInitialState(initialState),
  reducers: {
    fetchCodeFilter: (state, { payload }) => {
      state.filters.code.isLoading = true;
    },
    fetchTable: (state, { payload }) => {
      state.isLoading = true;
      state.pagination.page = payload.page
    },
    setTable: tableAdapter.setAll,
    ...paginationReducer,
  }
})

export const { fetchCodeFilter, fetchTable, setTable, setPagination, clickPagination} = slice.actions
export default slice.reducer