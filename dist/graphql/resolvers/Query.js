"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.Query=void 0;var Query=exports.Query={users:function users(_,__,_ref){var db=_ref.db;return db.users},user:function user(parent,args,_ref2){var db=_ref2.db;return db.users.find(function(user){return user.id===args.id})},posts:function posts(_,__,_ref3){var db=_ref3.db;return db.posts},post:function post(parent,args,_ref4){var db=_ref4.db;return db.posts.find(function(post){return post.id===args.id})},comments:function comments(_,__,_ref5){var db=_ref5.db;return db.comments},comment:function comment(parent,args,_ref6){var db=_ref6.db;return db.comments.find(function(comment){return comment.id===args.id})}};