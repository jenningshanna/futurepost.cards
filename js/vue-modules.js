new Vue({
	el: '#app',
		data: {
			'note': '',
			'to': '',
			'addy1': '',
			'addy2': '',
			'city': '',
			'state': '',
			'zip': '',
			'sign': ''
			}
	})
	
Vue.http.options.emulateJSON = true; // send as 

new Vue({
    el: '#postApp',
    data: {
        debug: true,
        domain: '',
        ajaxRequest: false,
        postResults: []
    },
    methods: {
      checkWebsite: function() {
        this.ajaxRequest = true;
        this.$http.post('https://wt-84851f78a8b77717e55137219dffeccd-0.run.webtask.io/stripe-payment', {
              domain: this.domain
            }, function (data, status, request) {
                this.postResults = data;

                this.ajaxRequest = false;
            });
      }}
});