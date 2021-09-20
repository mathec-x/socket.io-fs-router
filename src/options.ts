import path from 'path';
export const REQUIRE_MAIN_FILE = path.dirname(require.main.filename);
export const ISDEVELOPMENT = process.env.NODE_ENV !== 'production';