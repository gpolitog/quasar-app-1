<script>

import { mapGetters } from 'vuex'

import { QSelect, QInput, QBtn, QUploader, QField } from 'quasar'

import serviceConfig from 'src/config.js'

const config = serviceConfig()

export default {

	name: 'upload',

	data () {

		return {

			album: {

				titulo: null

			},

      		select: null,

			config

		}

	},

	components: { QSelect, QInput, QBtn, QUploader, QField },

	props: {},

	computed: {

		...mapGetters(['getAlbum', 'getToken', 'getGaleria'])

	},

	methods: {

		addHeaders () {

		    let headers = {

	          	Authorization: this.getToken

		     }

	      	return headers

	    },

	    addField () {

	    	let additionalFields = []

	    	let obj = {}

	    	obj.name = 'album_id'
	    	obj.value = this.select

	    	additionalFields.push(obj)

	    	return additionalFields

	    },

	    finish () {

	    	// console.log(this.$refs.uploader.files.remove)

	    }

	},

	mounted () {}

}
</script>

<template>

	<div>

		<p class="caption">Albuns</p>

		<hr>

		<q-select stack-label="Escolha o album para upload da imagem" v-model="select" :options="getAlbum"/>

		<q-field icon="add_a_photo" helper="">

			<q-uploader ref="uploader" :url="`${config.URIGALERY}`" multiple float-label="Escolha a imagem para upload" :headers="addHeaders()" :additionalFields="addField()" @add(files) @finish="finish"/>

		</q-field>

	</div>

</template>

<style>

</style>
