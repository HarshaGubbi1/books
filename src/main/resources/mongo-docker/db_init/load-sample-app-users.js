db.user.insertMany([
{ "_id" : ObjectId("5a6cc95fba03402460427b4a"), "_class" : "com.aidanwhiteley.books.domain.User", "authenticationServiceId" : "107641999401234521888", "firstName" : "Joe", "lastName" : "Dimagio", "fullName" : "Joe Dimagio", "email" : "joe.dimagio@gmail.com", "link" : "https://plus.google.com/+Joe+Dimagio", "lastLogon" : ISODate("2018-01-27T19:06:42.064Z"), "firstLogon" : ISODate("2018-01-27T18:47:59.255Z"), "roles" : [ "ROLE_USER", "ROLE_EDITOR", "ROLE_ADMIN" ], "authProvider" : "GOOGLE", "adminEmailedAboutSignup" : true },
{ "_id" : ObjectId("5a6ccababa03401ce44d8381"), "_class" : "com.aidanwhiteley.books.domain.User", "authenticationServiceId" : "1632142143412347", "firstName" : "Babe", "lastName" : "Ruth", "fullName" : "Babe Ruth", "link" : "https://www.facebook.com/app_scoped_user_id/16321123343498857/", "lastLogon" : ISODate("2018-01-27T18:53:46.333Z"), "firstLogon" : ISODate("2018-01-27T18:53:46.337Z"), "roles" : [ "ROLE_USER", "ROLE_EDITOR" ], "authProvider" : "FACEBOOK", "adminEmailedAboutSignup": true },
{ "_id" : ObjectId("5a6cc95fba03402460427b4b"), "_class" : "com.aidanwhiteley.books.domain.User", "authenticationServiceId" : "Dummy12345678", "firstName" : "Auto", "lastName" : "Logon", "fullName" : "Auto Logon", "email" : "example@example.com", "link" : "https://plus.google.com/+Auto+Logon", "lastLogon" : ISODate("1970-01-01T00:00:00.001Z"), "firstLogon" : ISODate("1970-01-01T00:00:00.001Z"), "roles" : [ "ROLE_ADMIN" ], "authProvider" : "LOCAL", "adminEmailedAboutSignup" : true }
]);