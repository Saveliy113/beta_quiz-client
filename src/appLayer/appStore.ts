import { configureStore, combineReducers } from '@reduxjs/toolkit';
import singUpReducer from '@/features/registration/model/signUp-Slice';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

//REDUX PERSIST
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//REDUX PERSIST
const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  signUp: singUpReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
//-----------------------

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>;
