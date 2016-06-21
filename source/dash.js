/**
 * Export all modules to create the SDK
 */

import Analytic from './analytic/analytic';

import { Person } from './models/person';
import { PersonStore } from './stores/person';

export default { Analytic, Person, PersonStore };
