export const environment = {
  production: true,
  appname: 'Paidlancer',
  supabase: {
    url: process.env['NG_APP_SUPABASE_URL'] || "",
    key: process.env['NG_APP_SUPABASE_API_KEY'] || ""
  }
};
