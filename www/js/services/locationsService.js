angular.module('starter').factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
      name : "Vancouver, Coast Salish Territory",
      lat : 49.2827,
      lng : -123.1207
    },
//    {
//      name : "Washington D.C., USA",
//      lat : 38.8951100,
//      lng : -77.0363700
//    }
//    {
//      name : "London, England",
//      lat : 51.500152,
//      lng : -0.126236
//    },
//    {
//      name : "Paris, France",
//      lat : 48.864716,
//      lng : 2.349014
//    },
//    {
//      name : "Moscow, Russia",
//      lat : 55.752121,
//      lng : 37.617664
//    },
//    {
//      name : "Rio de Janeiro, Brazil",
//      lat : -22.970722,
//      lng : -43.182365
//    },
//    {
//      name : "Sydney, Australia",
//      lat : -33.865143,
//      lng : 151.209900
//    }

  ];
var wordPressObj = {
        status: "ok",
            count: 7,
                count_total: 7,
                    pages: 1,
                        posts: [
                            {
                                id: 39,
                                type: "location",
                                slug: "kingway-continental",
                                url: "http://radtours.org/location/kingway-continental/",
                                status: "publish",
                                title: "Kingway Continental",
                                title_plain: "Kingway Continental",
                                content: "<p>The former hotel Ramada was purchased by the city of Vancouver in 2012 in order to relocate Granville continental residents.</p> <p>However some believe these disagreements are against the historical working-class, immigrant dynamic of this neighborhood, which was built in between Vancouver and New Westminster for those who were constructing the railroads. The &#8220;diversity&#8221;, &#8220;local businesses&#8221;, and &#8220;smaller communities&#8221;, are amongst those terms that are highly acknowledged and appreciated by residents of the neighborhood about this particular area in which the complex is located.</p> ",
                                excerpt: "<p>The former hotel Ramada was purchased by the city of Vancouver in 2012 in order to relocate Granville continental residents.</p> ",
                                date: "2016-03-31 20:17:23",
                                modified: "2016-03-31 20:17:23",
                                categories: [
                                    {
                                        id: 11,
                                        slug: "canada",
                                        title: "Canada",
                                        description: "",
                                        parent: 0,
                                        post_count: 6
                                    },
                                    {
                                        id: 18,
                                        slug: "renfrew-collingwood",
                                        title: "Renfrew-Collingwood",
                                        description: "",
                                        parent: 0,
                                        post_count: 5
                                    },
                                    {
                                        id: 10,
                                        slug: "vancouver",
                                        title: "Vancouver",
                                        description: "",
                                        parent: 0,
                                        post_count: 6
                                    }
                                ],
                                tags: [ ],
                                author: {
                                    id: 1,
                                    slug: "tempranova",
                                    name: "tempranova",
                                    first_name: "",
                                    last_name: "",
                                    nickname: "tempranova",
                                    url: "",
                                    description: ""
                                },
                                comments: [ ],
                                attachments: [ ],
                                comment_count: 0,
                                comment_status: "open",
                                custom_fields: {
                                    point_creator: [
                                        "Saba Asadi, Ashley Fraser, Fardine Gadjyev, David Lee, Kevin Sanghara"
                                    ],
                                    point_creator_links: [
                                        ""
                                    ],
                                    coordinates: {
                                        lat: 49.2318695,
                                        lng: -123.0313861
                                    },
                                    sources: [
                                        ""
                                    ],
                                    sources_links: [
                                        ""
                                    ]
                                },
                                taxonomy_hashtag: [ ]
                            },
                            {
                                id: 37,
                                type: "location",
                                slug: "sir-guy-carleton-elementary",
                                url: "http://radtours.org/location/sir-guy-carleton-elementary/",
                                status: "publish",
                                title: "Sir Guy Carleton Elementary",
                                title_plain: "Sir Guy Carleton Elementary",
                                content: "<p>Welcome to 3250 Kingsway, on the corner of Kingsway and Joyce Street, where you will find Sir Guy Carleton Elementary.<br /> -The school was originally called the Vancouver East School and the first building opened in 1896.<br /> -This building is now used and operated by a company called Green Thumb Theater which provides free theater classes to the students of Sir Guy Carleton Elementary. The current school itself consists of three buildings in front of the Green Thumb Theater but still on the same school grounds. The yellow, eight room, wood framed building located on the left, was built in 1908. This makes it the oldest, still in use school building, in all of Vancouver.</p> ",
                                excerpt: "<p>The school was originally called the Vancouver East School and the first building opened in 1896. </p> ",
                                date: "2016-03-31 20:15:27",
                                modified: "2016-03-31 20:15:27",
                                categories: [
                                    {
                                        id: 11,
                                        slug: "canada",
                                        title: "Canada",
                                        description: "",
                                        parent: 0,
                                        post_count: 6
                                    },
                                    {
                                        id: 18,
                                        slug: "renfrew-collingwood",
                                        title: "Renfrew-Collingwood",
                                        description: "",
                                        parent: 0,
                                        post_count: 5
                                    },
                                    {
                                        id: 10,
                                        slug: "vancouver",
                                        title: "Vancouver",
                                        description: "",
                                        parent: 0,
                                        post_count: 6
                                    }
                                ],
                                tags: [ ],
                                author: {
                                    id: 1,
                                    slug: "tempranova",
                                    name: "tempranova",
                                    first_name: "",
                                    last_name: "",
                                    nickname: "tempranova",
                                    url: "",
                                    description: ""
                                },
                                comments: [ ],
                                attachments: [ ],
                                comment_count: 0,
                                comment_status: "open",
                                custom_fields: {
                                    point_creator: [
                                        "Saba Asadi, Ashley Fraser, Fardine Gadjyev, David Lee, Kevin Sanghara"
                                    ],
                                    point_creator_links: [
                                        ""
                                    ],
                                    coordinates: {
                                 lat: 49.2340015,
                                 lng: -123.0375181
                                        },
                                    sources: [
                                        ""
                                    ],
                                    sources_links: [
                                        ""
                                    ]
                                },
                                taxonomy_hashtag: [ ]
//                            },
//                            {
//                                id: 34,
//                                type: "location",
//                                slug: "st-marys-parish",
//                                url: "http://radtours.org/location/st-marys-parish/",
//                                status: "publish",
//                                title: "St Mary&#8217;s Parish",
//                                title_plain: "St Mary&#8217;s Parish",
//                                content: "<p>-St. Mary’s Parish has been in the operating in the Renfrew – Collingwood neighbourhood for nearly a century and was established in 1923.<br /> -The first mass for this church was held in a storefront then a butchershop and then land was eventually purchased in 1925 and a church was built.</p> ",
//                                excerpt: "<p>St. Mary’s Parish has been in the operating in the Renfrew – Collingwood neighbourhood for nearly a century and was established in 1923. </p> ",
//                                date: "2016-03-31 20:14:25",
//                                modified: "2016-03-31 20:19:22",
//                                categories: [
//                                    {
//                                        id: 11,
//                                        slug: "canada",
//                                        title: "Canada",
//                                        description: "",
//                                        parent: 0,
//                                        post_count: 6
//                                    },
//                                    {
//                                        id: 18,
//                                        slug: "renfrew-collingwood",
//                                        title: "Renfrew-Collingwood",
//                                        description: "",
//                                        parent: 0,
//                                        post_count: 5
//                                    },
//                                    {
//                                        id: 10,
//                                        slug: "vancouver",
//                                        title: "Vancouver",
//                                        description: "",
//                                        parent: 0,
//                                        post_count: 6
//                                    }
//                                ],
//                                tags: [ ],
//                                author: {
//                                    id: 1,
//                                    slug: "tempranova",
//                                    name: "tempranova",
//                                    first_name: "",
//                                    last_name: "",
//                                    nickname: "tempranova",
//                                    url: "",
//                                    description: ""
//                                },
//                                comments: [ ],
//                                attachments: [
//                                    {
//                                        id: 35,
//                                        url: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.13.54-PM.png",
//                                        slug: "screen-shot-2016-03-31-at-1-13-54-pm",
//                                        title: "Screen Shot 2016-03-31 at 1.13.54 PM",
//                                        description: "",
//                                        caption: "",
//                                        parent: 34,
//                                        mime_type: "image/png",
//                                        images: {
//                                            full: {
//                                                url: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.13.54-PM.png",
//                                                width: 729,
//                                                height: 423
//                                            },
//                                            thumbnail: {
//                                                url: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.13.54-PM-150x150.png",
//                                                width: 150,
//                                                height: 150
//                                            },
//                                            medium: {
//                                                url: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.13.54-PM-300x174.png",
//                                                width: 300,
//                                                height: 174
//                                            },
//                                            medium_large: {
//                                                url: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.13.54-PM.png",
//                                                width: 729,
//                                                height: 423
//                                            },
//                                            large: {
//                                                url: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.13.54-PM.png",
//                                                width: 729,
//                                                height: 423
//                                            }
//                                        }
//                                    }
//                                ],
//                                comment_count: 0,
//                                comment_status: "open",
//                                thumbnail: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.13.54-PM-150x150.png",
//                                custom_fields: {
//                                    point_creator: [
//                                        "Saba Asadi, Ashley Fraser, Fardine Gadjyev, David Lee, Kevin Sanghara"
//                                    ],
//                                    point_creator_links: [
//                                        ""
//                                    ],
//                                    coordinates: [
//                                        "49.2366298,-123.0340296"
//                                    ],
//                                    sources: [
//                                        ""
//                                    ],
//                                    sources_links: [
//                                        ""
//                                    ]
//                                },
//                                thumbnail_size: "thumbnail",
//                                thumbnail_images: {
//                                    full: {
//                                        url: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.13.54-PM.png",
//                                        width: 729,
//                                        height: 423
//                                    },
//                                    thumbnail: {
//                                        url: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.13.54-PM-150x150.png",
//                                        width: 150,
//                                        height: 150
//                                    },
//                                    medium: {
//                                        url: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.13.54-PM-300x174.png",
//                                        width: 300,
//                                        height: 174
//                                    },
//                                    medium_large: {
//                                        url: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.13.54-PM.png",
//                                        width: 729,
//                                        height: 423
//                                    },
//                                    large: {
//                                        url: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.13.54-PM.png",
//                                        width: 729,
//                                        height: 423
//                                    }
//                                },
//                                taxonomy_hashtag: [ ]
//                            },
//                            {
//                                id: 31,
//                                type: "location",
//                                slug: "joyce-collingwood-station",
//                                url: "http://radtours.org/location/joyce-collingwood-station/",
//                                status: "publish",
//                                title: "Joyce-Collingwood Station",
//                                title_plain: "Joyce-Collingwood Station",
//                                content: "<p>&#8211; The district was heavily covered by dense forestry, until 1861. Richard Moody attempted to modernize the region, by constructing a military trail from New Westminster towards English Bay.</p> <p>&#8211; Joyce-Collingwood station was formerly known as “Joyce Station” in 1985 along the original expo line.</p> <p>&#8211; SkyTrain attempted to create a bright presence by adding the Collingwood portion due to the negative past where the area was recognized to have high crime and violence rates since it opened in 1985.</p> <p>&#8211; It was once an industrial vicinity, but now currently being transformed into Collingwood Village, which consists of a denser and more vast population with the construction of high-rise condos.</p> <p>&#8211; Improvements in the area were administered by the renaming of the area, the implementation and development of high-rise condominiums in order to stabilize and accommodate the vastly growing residential population of the Joyce-Collingwood vicinity.</p> ",
//                                excerpt: "<p>The district was heavily covered by dense forestry, until 1861. Richard Moody attempted to modernize the region, by constructing a military trail from New Westminster towards English Bay.</p> ",
//                                date: "2016-03-31 20:12:09",
//                                modified: "2016-03-31 20:12:14",
//                                categories: [
//                                    {
//                                        id: 11,
//                                        slug: "canada",
//                                        title: "Canada",
//                                        description: "",
//                                        parent: 0,
//                                        post_count: 6
//                                    },
//                                    {
//                                        id: 18,
//                                        slug: "renfrew-collingwood",
//                                        title: "Renfrew-Collingwood",
//                                        description: "",
//                                        parent: 0,
//                                        post_count: 5
//                                    },
//                                    {
//                                        id: 10,
//                                        slug: "vancouver",
//                                        title: "Vancouver",
//                                        description: "",
//                                        parent: 0,
//                                        post_count: 6
//                                    }
//                                ],
//                                tags: [ ],
//                                author: {
//                                    id: 1,
//                                    slug: "tempranova",
//                                    name: "tempranova",
//                                    first_name: "",
//                                    last_name: "",
//                                    nickname: "tempranova",
//                                    url: "",
//                                    description: ""
//                                },
//                                comments: [ ],
//                                attachments: [
//                                    {
//                                        id: 32,
//                                        url: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.10.19-PM.png",
//                                        slug: "screen-shot-2016-03-31-at-1-10-19-pm",
//                                        title: "Screen Shot 2016-03-31 at 1.10.19 PM",
//                                        description: "",
//                                        caption: "",
//                                        parent: 31,
//                                        mime_type: "image/png",
//                                        images: {
//                                            full: {
//                                                url: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.10.19-PM.png",
//                                                width: 633,
//                                                height: 421
//                                            },
//                                            thumbnail: {
//                                                url: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.10.19-PM-150x150.png",
//                                                width: 150,
//                                                height: 150
//                                            },
//                                            medium: {
//                                                url: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.10.19-PM-300x200.png",
//                                                width: 300,
//                                                height: 200
//                                            },
//                                            medium_large: {
//                                                url: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.10.19-PM.png",
//                                                width: 633,
//                                                height: 421
//                                            },
//                                            large: {
//                                                url: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.10.19-PM.png",
//                                                width: 633,
//                                                height: 421
//                                            }
//                                        }
//                                    }
//                                ],
//                                comment_count: 0,
//                                comment_status: "open",
//                                thumbnail: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.10.19-PM-150x150.png",
//                                custom_fields: {
//                                    point_creator: [
//                                        "Saba Asadi, Ashley Fraser, Fardine Gadjyev, David Lee, Kevin Sanghara"
//                                    ],
//                                    point_creator_links: [
//                                        ""
//                                    ],
//                                    coordinates: [
//                                        "49.2381316,-123.0317708"
//                                    ],
//                                    sources: [
//                                        ""
//                                    ],
//                                    sources_links: [
//                                        ""
//                                    ]
//                                },
//                                thumbnail_size: "thumbnail",
//                                thumbnail_images: {
//                                    full: {
//                                        url: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.10.19-PM.png",
//                                        width: 633,
//                                        height: 421
//                                    },
//                                    thumbnail: {
//                                        url: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.10.19-PM-150x150.png",
//                                        width: 150,
//                                        height: 150
//                                    },
//                                    medium: {
//                                        url: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.10.19-PM-300x200.png",
//                                        width: 300,
//                                        height: 200
//                                    },
//                                    medium_large: {
//                                        url: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.10.19-PM.png",
//                                        width: 633,
//                                        height: 421
//                                    },
//                                    large: {
//                                        url: "http://radtours.org/wp-content/uploads/2016/03/Screen-Shot-2016-03-31-at-1.10.19-PM.png",
//                                        width: 633,
//                                        height: 421
//                                    }
//                                },
//                                taxonomy_hashtag: [ ]
//                            },
//                            {
//                                id: 29,
//                                type: "location",
//                                slug: "renfrew-community-centrepark",
//                                url: "http://radtours.org/location/renfrew-community-centrepark/",
//                                status: "publish",
//                                title: "Renfrew Community Centre/Park",
//                                title_plain: "Renfrew Community Centre/Park",
//                                content: "<p>Community centre was opened in 1963 and is located surrounding the Renfrew Ravine. The community centre hosts many services including a library, pool, daycare and computer lab.</p> ",
//                                excerpt: "<p>Community centre was opened in 1963 and is located surrounding the Renfrew Ravine. The community centre hosts many services including a library, pool, daycare and computer lab.</p> ",
//                                date: "2016-03-31 20:09:57",
//                                modified: "2016-03-31 20:11:03",
//                                categories: [
//                                    {
//                                        id: 18,
//                                        slug: "renfrew-collingwood",
//                                        title: "Renfrew-Collingwood",
//                                        description: "",
//                                        parent: 0,
//                                        post_count: 5
//                                    }
//                                ],
//                                tags: [ ],
//                                author: {
//                                    id: 1,
//                                    slug: "tempranova",
//                                    name: "tempranova",
//                                    first_name: "",
//                                    last_name: "",
//                                    nickname: "tempranova",
//                                    url: "",
//                                    description: ""
//                                },
//                                comments: [ ],
//                                attachments: [ ],
//                                comment_count: 0,
//                                comment_status: "open",
//                                custom_fields: {
//                                    point_creator: [
//                                        "Saba Asadi, Ashley Fraser, Fardine Gadjyev, David Lee, Kevin Sanghara"
//                                    ],
//                                    point_creator_links: [
//                                        ""
//                                    ],
//                                    coordinates: [
//                                        "49.2509268,-123.0420531"
//                                    ],
//                                    sources: [
//                                        ""
//                                    ],
//                                    sources_links: [
//                                        ""
//                                    ]
//                                },
//                                taxonomy_hashtag: [
//                                    {
//                                        id: 19,
//                                        slug: "park",
//                                        title: "park",
//                                        description: "",
//                                        post_count: 1
//                                    }
//                                ]
//                            },
//                            {
//                                id: 13,
//                                type: "location",
//                                slug: "sample-point-location-2",
//                                url: "http://radtours.org/location/sample-point-location-2/",
//                                status: "publish",
//                                title: "Sample Point Location 2",
//                                title_plain: "Sample Point Location 2",
//                                content: "<p>Sample content 2.</p> ",
//                                excerpt: "<p>Sample excerpt 2.</p> ",
//                                date: "2016-03-26 08:07:24",
//                                modified: "2016-03-26 08:07:24",
//                                categories: [
//                                    {
//                                        id: 11,
//                                        slug: "canada",
//                                        title: "Canada",
//                                        description: "",
//                                        parent: 0,
//                                        post_count: 6
//                                    },
//                                    {
//                                        id: 9,
//                                        slug: "downtown-eastside",
//                                        title: "Downtown Eastside",
//                                        description: "",
//                                        parent: 0,
//                                        post_count: 2
//                                    },
//                                    {
//                                        id: 10,
//                                        slug: "vancouver",
//                                        title: "Vancouver",
//                                        description: "",
//                                        parent: 0,
//                                        post_count: 6
//                                    }
//                                ],
//                                tags: [ ],
//                                author: {
//                                    id: 1,
//                                    slug: "tempranova",
//                                    name: "tempranova",
//                                    first_name: "",
//                                    last_name: "",
//                                    nickname: "tempranova",
//                                    url: "",
//                                    description: ""
//                                },
//                                comments: [ ],
//                                attachments: [ ],
//                                comment_count: 0,
//                                comment_status: "open",
//                                custom_fields: {
//                                    point_creator: [
//                                        "Victor"
//                                    ],
//                                    point_creator_links: [
//                                        "http://tempranova.com"
//                                    ],
//                                    coordinates: [
//                                        "49.2592095,-123.0908865"
//                                    ],
//                                    sources: [
//                                        "None"
//                                    ],
//                                    sources_links: [
//                                        "None"
//                                    ]
//                                },
//                                taxonomy_hashtag: [
//                                    {
//                                        id: 16,
//                                        slug: "victor",
//                                        title: "victor",
//                                        description: "",
//                                        post_count: 2
//                                    }
//                                ]
//                            },
//                            {
//                                id: 9,
//                                type: "location",
//                                slug: "sample-point-location",
//                                url: "http://radtours.org/location/sample-point-location/",
//                                status: "publish",
//                                title: "Sample Point Location",
//                                title_plain: "Sample Point Location",
//                                content: "<p>Sample point content.</p> ",
//                                excerpt: "<p>Sample excerpt short summary.</p> ",
//                                date: "2016-03-24 08:57:13",
//                                modified: "2016-03-26 08:06:33",
//                                categories: [
//                                    {
//                                        id: 11,
//                                        slug: "canada",
//                                        title: "Canada",
//                                        description: "",
//                                        parent: 0,
//                                        post_count: 6
//                                    },
//                                    {
//                                        id: 9,
//                                        slug: "downtown-eastside",
//                                        title: "Downtown Eastside",
//                                        description: "",
//                                        parent: 0,
//                                        post_count: 2
//                                    },
//                                    {
//                                        id: 10,
//                                        slug: "vancouver",
//                                        title: "Vancouver",
//                                        description: "",
//                                        parent: 0,
//                                        post_count: 6
//                                    }
//                                ],
//                                tags: [ ],
//                                author: {
//                                    id: 1,
//                                    slug: "tempranova",
//                                    name: "tempranova",
//                                    first_name: "",
//                                    last_name: "",
//                                    nickname: "tempranova",
//                                    url: "",
//                                    description: ""
//                                },
//                                comments: [ ],
//                                attachments: [
//                                    {
//                                        id: 10,
//                                        url: "http://radtours.org/wp-content/uploads/2016/03/google-location-icon-519580-076_LocationArrow-512.png",
//                                        slug: "google-location-icon-519580-076_locationarrow-512",
//                                        title: "google-location-icon-519580-076_LocationArrow-512",
//                                        description: "",
//                                        caption: "",
//                                        parent: 9,
//                                        mime_type: "image/png",
//                                        images: {
//                                            full: {
//                                                url: "http://radtours.org/wp-content/uploads/2016/03/google-location-icon-519580-076_LocationArrow-512.png",
//                                                width: 512,
//                                                height: 512
//                                            },
//                                            thumbnail: {
//                                                url: "http://radtours.org/wp-content/uploads/2016/03/google-location-icon-519580-076_LocationArrow-512-150x150.png",
//                                                width: 150,
//                                                height: 150
//                                            },
//                                            medium: {
//                                                url: "http://radtours.org/wp-content/uploads/2016/03/google-location-icon-519580-076_LocationArrow-512-300x300.png",
//                                                width: 300,
//                                                height: 300
//                                            },
//                                            medium_large: {
//                                                url: "http://radtours.org/wp-content/uploads/2016/03/google-location-icon-519580-076_LocationArrow-512.png",
//                                                width: 512,
//                                                height: 512
//                                            },
//                                            large: {
//                                                url: "http://radtours.org/wp-content/uploads/2016/03/google-location-icon-519580-076_LocationArrow-512.png",
//                                                width: 512,
//                                                height: 512
//                                            }
//                                        }
//                                    }
//                                ],
//                                comment_count: 0,
//                                comment_status: "open",
//                                thumbnail: "http://radtours.org/wp-content/uploads/2016/03/google-location-icon-519580-076_LocationArrow-512-150x150.png",
//                                custom_fields: {
//                                    point_creator: [
//                                        "Victor Temprano"
//                                    ],
//                                    point_creator_links: [
//                                        "http://tempranova.com"
//                                    ],
//                                    coordinates: [
//                                        "49.2580892,-123.0611033"
//                                    ],
//                                    sources: [
//                                        "None"
//                                    ],
//                                    sources_links: [
//                                        "None"
//                                    ]
//                                },
//                                thumbnail_size: "thumbnail",
//                                thumbnail_images: {
//                                    full: {
//                                        url: "http://radtours.org/wp-content/uploads/2016/03/google-location-icon-519580-076_LocationArrow-512.png",
//                                        width: 512,
//                                        height: 512
//                                    },
//                                    thumbnail: {
//                                        url: "http://radtours.org/wp-content/uploads/2016/03/google-location-icon-519580-076_LocationArrow-512-150x150.png",
//                                        width: 150,
//                                        height: 150
//                                    },
//                                    medium: {
//                                        url: "http://radtours.org/wp-content/uploads/2016/03/google-location-icon-519580-076_LocationArrow-512-300x300.png",
//                                        width: 300,
//                                        height: 300
//                                    },
//                                    medium_large: {
//                                        url: "http://radtours.org/wp-content/uploads/2016/03/google-location-icon-519580-076_LocationArrow-512.png",
//                                        width: 512,
//                                        height: 512
//                                    },
//                                    large: {
//                                        url: "http://radtours.org/wp-content/uploads/2016/03/google-location-icon-519580-076_LocationArrow-512.png",
//                                        width: 512,
//                                        height: 512
//                                    }
//                                },
//                                taxonomy_hashtag: [
//                                    {
//                                        id: 15,
//                                        slug: "canada",
//                                        title: "canada",
//                                        description: "",
//                                        post_count: 1
//                                    },
//                                    {
//                                        id: 16,
//                                        slug: "victor",
//                                        title: "victor",
//                                        description: "",
//                                        post_count: 2
//                                    }
//                                ]
                            }
                        ]
    }
    
  return {
      all: function() {
          return wordPressObj;
      },
      topThree: function() {
          return wordPressObj;
      }
//      all: function() {
//          return locationsObj;
//      },
//      topThree: function() {
//          return locationsObj
//      }
    }
}]);