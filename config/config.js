/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",   // this variable is provided as a consistent location
			   // it is currently only used by 3rd party modules. no MagicMirror code uses this value
			   // as we have no usage, we  have no constraints on what this field holds
			   // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
            module: 'MMM-auto-refresh',
            config: {
                // See below for configurable options
				refreshInterval: 30000 // 30 초 간격 refresh
            }
        },
		{
            module: 'MMM-TTS',
			position: 'top_right',
			config: {
				speed: 1.2,
			}

        },
		{
    		module: "MMM-pages",
    		config: {
      			modules: [
        			["register"],
        			["metadata"],
        			["info"],
        			["chat"],
        			["chapter"],
        			["mypage"]
      			],
      		fixed: [],
      		rotationTime: 0,
			useLockString: false,
      		animation: "fade",
      		animationTime: 1000,
			broadcastPageChanges: true,
			rotationTime: 0
    		}
  		},
		{
			module: "alert",
		},
		/*
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 40.776676,
				lon: -73.971321
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 40.776676,
				lon: -73.971321
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		*/
		// custom modules can be added here
		{
      		module: "register",
      		position: "middle_center",  // 위치는 적절히 선택 (예: top_left, bottom_bar 등)
      		config: {
        		// 필요시 추가 설정 가능
      		}
    	},
  		{ 
			module: "customNav",
			position: "bottom_bar",
		},
  		{ 
			module: "metadata",
			position: "middle_center",
		},
  		{ 
			module: "info",
			position: "middle_center",
		},
  		{ 
			module: "chat",
			position: "middle_center",
		},
  		{ 
			module: "chapter",
			position: "middle_center",
		},
  		{ 
			module: "mypage",
			position: "middle_center",
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
