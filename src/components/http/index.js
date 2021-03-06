import http from 'src/http.js'

import store from 'src/store/vuex/state.js'

import serviceConfig from 'src/config.js'

const config = serviceConfig()

export const serviceAuthorize = (data) => {

	return http.post(`${config.URI}/oauth/token`, data)

}

export const serviceGetAlbum = (data) => {

	return http.get(`${config.URI}/api/album`, {

		headers: {

			'Authorization': store.token

		}

	})

}

export const serviceRemoveAlbum = (data) => {

	return http.delete(`${config.URI}/api/album/${data}`, {

		headers: {

			'Authorization': store.token

		}

	})

}

export const serviceSaveAlbum = (data) => {

	return http.post(`${config.URI}/api/album`, data, {

		headers: {

			'Authorization': store.token

		}

	})

}

export const serviceUpdateAlbum = (data) => {

	return http.put(`${config.URI}/api/album/${data.codigo}`, data.album, {

		headers: {

			'Authorization': store.token

		}

	})

}

// Galeria

export const serviceGetAllGaleria = (data) => {

	return http.get(`${config.URI}/api/galeria`, {

		headers: {

			'Authorization': store.token

		}

	})

}

export const serviceGaleryFindById = (data) => {

	return http.get(`${config.URI}/api/album/${data}`, {

		headers: {

			'Authorization': store.token

		}

	})

}

export const serviceRemoveGaleryById = (data) => {

	return http.delete(`${config.URI}/api/galeria/${data.idalbum}/${data.idgaleria}`, {

		headers: {

			'Authorization': store.token

		}

	})

}
