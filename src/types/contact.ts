import { ComponentType } from 'react';

export interface ContactFormSection {
  title: string;
  description: string;
  formComponent: ComponentType;
}