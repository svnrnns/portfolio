const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function apiGetArticle(req, res) {
  const { code } = req.query;

  supabase
    .from("articles")
    .select("*")
    .eq("code", code)
    .then((supabaseResponse) => {
      if (supabaseResponse.status == 200) {
        res.status(200).json({
          response: supabaseResponse.data,
          error: null,
        });
      }

      if (supabaseResponse.error != null) {
        res.status(supabaseResponse.status).json({
          response: null,
          error: supabaseResponse.error,
        });
      }
    });
}

module.exports = async (req, res) => {
  const { pathname, query } = new URL(req.url, `http://${req.headers.host}`);

  if (pathname == "/api/getArticle" && query.code)
    return apiGetArticle(req, res);
};
