import 'jest-ts-auto-mock';
import { createMock } from 'ts-auto-mock';

// Mock AppScript types
global.Utilities = createMock<GoogleAppsScript.Utilities.Utilities>();
global.PropertiesService = createMock<GoogleAppsScript.Properties.PropertiesService>();
