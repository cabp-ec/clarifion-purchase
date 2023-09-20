import { ApiRequestParams } from '../api/types/api.request.params.type';
import { ApiReference } from '../api/types/api.reference.type';
import axios from 'axios';
import apiRef from '../api/api.ref';

export class ApiClient {
  #formUrl = (requestParams: ApiRequestParams, asUrlParams: boolean = false): string => {
    const key: string = requestParams.key || 'default';
    const api: ApiReference = apiRef[key];
    const urlParams = asUrlParams
      ? `?${ new URLSearchParams(requestParams.data || {}).toString() }`
      : '';
    let baseUrl = `${ api.protocol }://${ api.host }`;

    if (api.port) {
      baseUrl += `:${ api.port }`;
    }

    if (api.base) {
      baseUrl += api.base;
    }

    return baseUrl + requestParams.endpoint + urlParams;
  };

  get(requestParams: ApiRequestParams) {
    const origin = window.location.protocol + '//' + window.location.host;
    const options = {
      method: 'GET',
      url: this.#formUrl(requestParams),
      headers: {
        Accept: 'application/json',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Origin': origin,
        Origin: origin,
        Referer: origin,
      },
    };

    /*const myHeaders = new Headers({
      Accept: 'application/json',
      'Accept-Language': 'en-US,en;q=0.5',
      'Accept-Encoding': 'gzip, deflate',
      'Access-Control-Allow-Origin': 'http://127.0.0.1:5173',
      Origin: 'http://127.0.0.1:5173',
      Connection: 'keep-alive',
      Referer: 'http://127.0.0.1:5173/',
    });

    const opt = {
      method: 'GET',
      headers: myHeaders,
    };

    fetch('http://carlos-bucheli.com/api/c/1/home/state', opt)
      .then(response => response.json())
      .then(response => console.log('FETCH', response))
      .catch(err => console.error(err));

    return null;*/

    return axios.request(options).then(response => response.data).catch(function (error) {
      console.error('ERROR-X', error.toString());
    });
  }

  post(requestParams: ApiRequestParams) {
    return axios
      .post(this.#formUrl(requestParams), requestParams.data || {})
      .then(response => {
        console.log('posting...', response.data);
        return response.data;
      });
  }
}
