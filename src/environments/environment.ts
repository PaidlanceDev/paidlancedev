export const environment = {
  production: true,
  appname: 'Paidlancer',
  supabase: {
    url: "https://pytboioympljfyxuapia.supabase.co",
    key: process.env['NG_APP_SUPABASE_API_KEY'] || ""
  }
};
