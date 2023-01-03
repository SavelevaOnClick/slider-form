---
to: src/reducers/<%=h.changeCase.camelCase(name)%>.ts
---
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EDataLoadingStatus, TGlobalState } from "@types"
import {httpGet, httpPost, httpDel, httpPut} from '@services';

type TInitialState = TGlobalState['<%=h.changeCase.camelCase(name)%>']

const initialState: TInitialState = {
	data: [],
	status: EDataLoadingStatus.IDLE,
	error: null
}

export const get<%=h.changeCase.pascal(name)%> = createAsyncThunk(
	'@@<%=h.changeCase.camelCase(name)%>/get<%=h.changeCase.pascal(name)%>',
	async (payload, {
	  dispatch,
	  getState,
	}) => {
		const {data}: any = await httpGet('https://server/endpoint')
		return data;
	},
  );

const <%=h.changeCase.camelCase(name)%>Slice = createSlice({
	name: '@@<%=h.changeCase.camelCase(name)%>',
	initialState,
	reducers: {
		set<%=h.changeCase.pascal(name)%>: (state, action) => {
			state.data = action.payload
		},
		reset<%=h.changeCase.pascal(name)%>: () => initialState,
	},
	extraReducers: (builder) => {
		builder
		.addCase(get<%=h.changeCase.pascal(name)%>.pending, (state) => {
			state.status = EDataLoadingStatus.LOADING
		})
		.addCase(get<%=h.changeCase.pascal(name)%>.rejected, (state, action) => {
			state.status = EDataLoadingStatus.IDLE
			state.error = action.error.message
		})
		.addCase(get<%=h.changeCase.pascal(name)%>.fulfilled, (state, action) => {
			state.status = EDataLoadingStatus.FULFILLED
			state.error = null
			state.data = action.payload.data
		})
	},
})

// actions
export const {set<%=h.changeCase.pascal(name)%>, reset<%=h.changeCase.pascal(name)%>} = <%=h.changeCase.camelCase(name)%>Slice.actions

// reducer
export const <%=h.changeCase.camelCase(name)%> = <%=h.changeCase.camelCase(name)%>Slice.reducer

// selectors
export const select<%=h.changeCase.pascal(name)%> = (state: TGlobalState) => state.<%=h.changeCase.camelCase(name)%>;