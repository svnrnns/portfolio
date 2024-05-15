import { ref, computed } from "vue";
import { createClient } from "@supabase/supabase-js";

const isProd = import.meta.env.VITE_APP_IS_PROD;
let supabase = null;

function createIfNotExistsSupabaseClient() {
  if (supabase == null) {
    const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_APP_SUPABASE_KEY;

    supabase = createClient(supabaseUrl, supabaseKey);
  }
}
function processResponse(supabaseResponse) {
  let response = null;
  let error = null;
  let loading = true;

  if (supabaseResponse.status == 200) {
    response = supabaseResponse.data;
  }
  if (supabaseResponse.error != null) {
    error = supabaseResponse.error;
  }

  loading = false;

  return {
    response,
    error,
    loading,
  };
}
export function getArticle(code) {
  const response = ref(null);
  const error = ref(null);
  const loading = ref(true);

  if (isProd) {
    fetch("/api/getArticle?code=" + code).then((serverResponse) => {
      response.value = serverResponse.json().response[0];
      error.value = serverResponse.json().error;
    });
  } else {
    createIfNotExistsSupabaseClient();

    supabase
      .from("articles")
      .select("*")
      .eq("code", code)
      .then((supabaseResponse) => {
        const {
          response: responseData,
          error: errorData,
          loading: loadingData,
        } = processResponse(supabaseResponse);

        response.value = responseData[0];
        error.value = errorData;
        loading.value = loadingData;
      });
  }

  return computed(() => {
    return {
      response: response.value,
      error: error.value,
      loading: loading.value,
    };
  });
}
