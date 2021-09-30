import querystring from 'querystring';

interface RequestOptionType {
  method?: string;
  headers?: {
    [header: string]: string;
  };
  body?: any;
}

interface ResponseType<T = any> {
  success: boolean;
  data: T;
  code: string;
  message: string;
  total?: number;
  pageIndex?: number;
  pageSize?: number;
}

interface ParamsType {
  [x: string]: any;
}

interface RequestInterface {
  <T = any>(
    url: string,
    options?: RequestOptionType,
    params?: ParamsType,
  ): Promise<ResponseType<T>>;
  get<T = any>(url: string, query?: ParamsType): Promise<ResponseType<T>>;
  patch<T = any>(url: string, query?: ParamsType): Promise<ResponseType<T>>;
  post<T = any>(
    url: string,
    body?: RequestOptionType['body'],
    noPrefix?: boolean,
  ): Promise<ResponseType<T>>;
  put<T = any>(
    url: string,
    body?: RequestOptionType['body'],
    noPrefix?: boolean,
  ): Promise<ResponseType<T>>;
  delete<T = any>(url: string): Promise<ResponseType<T>>;
}
/**
 * Requests a URL, returning a promise.
 *
 * @param {string} url      - The path we want to request
 * @param {Object} [options] - The options we want to pass to "fetch"
 * @param {Object} [params]
 *
 * @return {object}           An object containing either "data" or "err"
 */
const request: RequestInterface = async (url, options, params) => {
  const headers = {
    ...((options || {}).headers || {}),
  };

  const response = await fetch(
    params ? `${url}?${querystring.stringify(params)}` : url,
    {
      ...options,
      headers,
    },
  );

  const resJson = await response.json();

  return resJson;
};

const getUrl = (url: string, isCustomUrl: boolean = false) => {
  return url;
}

request.get = (url, query, customUrl = false) => {
  return request(getUrl(url, customUrl), {}, query);
};

request.patch = (url, query, customUrl = false) => {
  return request(
    getUrl(url, customUrl),
    {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
    },
    query,
  );
};

request.post = (url, body, customUrl = false) => {
  return request(getUrl(url, customUrl), {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  })
};

request.put = (url, body, customUrl = false) =>
  request(getUrl(url, customUrl), {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  request.delete = url =>
    request(`${url}`, {
        method: 'DELETE',
    });

export default request;