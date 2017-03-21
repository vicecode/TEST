
	APPLIB
    .factory('MiServicio', [
    	'$http',
    	'$q',
    function(
    	$http,
    	$q
    ) { 

        var Self = {

        	Env: {
        		User: '',
        		HostName: ''
        	},

        	UnArray: [1,2,3,4,5,6],

        	UnValor: "Un Valor cambiado",

            getSysInfo: function() {

            	$http.get('http://localhost:65000')
            	.then(
            		function(Data) {

            			Self.Env = {
							User: Data.data.Env.USERNAME + ' ' + Math.random(),
							HostName: Data.data.Env.HOSTNAME
            			};
            		},
            		function(Error) {

            			console.log(Error);
            		}
            	);
            }
        };

        return Self;
    }]);