import React from 'react';
import { StubScreen } from '../screens/StubScreen';

export const createStubScreen = (name: string) => () => (
  <StubScreen name={name} />
);
