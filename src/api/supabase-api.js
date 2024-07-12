import { ref, computed } from 'vue';
import { supabase } from './supabase-client';

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

  supabase
    .from('articles')
    .select('*')
    .eq('code', code)
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

  return computed(() => {
    return {
      response: response.value,
      error: error.value,
      loading: loading.value,
    };
  });
}
