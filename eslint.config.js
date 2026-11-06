import { defineConfig, globalIgnores } from 'eslint/config';
import neja from '@neja-digital/config/eslint';

export default defineConfig([globalIgnores(['dist']), ...neja]);
