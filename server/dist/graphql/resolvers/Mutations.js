"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.Mutation=void 0;var _nanoid=require("nanoid");function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+""}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}var Mutation=exports.Mutation={createUser:function createUser(parent,_ref,_ref2){var data=_ref.data;var pubsub=_ref2.pubsub,db=_ref2.db;var user=_objectSpread({id:(0,_nanoid.nanoid)()},data);db.users.push(user);pubsub.publish("userCreated",{userCreated:user}).then(console.log("user created"));return user},updateUser:function updateUser(parent,_ref3,_ref4){var id=_ref3.id,data=_ref3.data;var pubsub=_ref4.pubsub,db=_ref4.db;var user_index=db.users.findIndex(function(user){return user.id===id});if(user_index===-1){throw new Error("User not found")}var updated_user=db.users[user_index]=_objectSpread(_objectSpread({},db.users[user_index]),data);pubsub.publish("userUpdated",{userUpdated:updated_user});return updated_user},deleteUser:function deleteUser(parent,_ref5,_ref6){var id=_ref5.id;var pubsub=_ref6.pubsub,db=_ref6.db;var user_index=db.users.findIndex(function(user){return user.id===id});if(user_index===-1){throw new Error("User not found")}var deleted_user=db.users[user_index];db.users.splice(user_index,1);pubsub.publish("userDeleted",{userDeleted:deleted_user});return deleted_user},deleteAllUsers:function deleteAllUsers(_,__,_ref7){var pubsub=_ref7.pubsub,db=_ref7.db;var length=db.users.length;db.users.splice(0,length);return{count:length}},createPost:function createPost(parent,_ref8,_ref9){var data=_ref8.data;var pubsub=_ref9.pubsub,db=_ref9.db;var post=_objectSpread({id:(0,_nanoid.nanoid)()},data);db.posts.push(post);pubsub.publish("postCreated",{postCreated:post});pubsub.publish("postCount",{postCount:db.posts.length});return post},updatePost:function updatePost(parent,_ref10,_ref11){var id=_ref10.id,data=_ref10.data;var pubsub=_ref11.pubsub,db=_ref11.db;var post_index=db.posts.findIndex(function(post){return post.id===id});if(post_index===-1){throw new Error("Post not found")}var updated_post=db.posts[post_index]=_objectSpread(_objectSpread({},db.posts[post_index]),data);pubsub.publish("postUpdated",{postUpdated:updated_post});return updated_post},deletePost:function deletePost(parent,_ref12,_ref13){var id=_ref12.id;var pubsub=_ref13.pubsub,db=_ref13.db;var post_index=db.posts.findIndex(function(post){return post.id===id});if(post_index===-1){throw new Error("Post not found")}var deleted_post=db.posts[post_index];db.posts.splice(post_index,1);pubsub.publish("postDeleted",{postDeleted:deleted_post});pubsub.publish("postCount",{postCount:db.posts.length});return deleted_post},deleteAllPosts:function deleteAllPosts(_,__,_ref14){var pubsub=_ref14.pubsub,db=_ref14.db;var length=db.posts.length;db.posts.splice(0,length);pubsub.publish("postCount",{postCount:db.posts.length});return{count:length}},createComment:function createComment(parent,_ref15,_ref16){var data=_ref15.data;var pubsub=_ref16.pubsub,db=_ref16.db;var comment=_objectSpread({id:(0,_nanoid.nanoid)()},data);db.comments.push(comment);pubsub.publish("commentCreated",{commentCreated:comment});pubsub.publish("commentCount",{commentCount:db.comments.length});return comment},updateComment:function updateComment(parent,_ref17,_ref18){var id=_ref17.id,data=_ref17.data;var pubsub=_ref18.pubsub,db=_ref18.db;var comment_index=db.comments.findIndex(function(comment){return comment.id===id});if(comment_index===-1){throw new Error("Comment not found")}var updated_comment=db.comments[comment_index]=_objectSpread(_objectSpread({},db.comments[comment_index]),data);pubsub.publish("commentUpdated",{commentUpdated:updated_comment});return updated_comment},deleteComment:function deleteComment(parent,_ref19,_ref20){var id=_ref19.id;var pubsub=_ref20.pubsub,db=_ref20.db;var comment_index=db.comments.findIndex(function(comment){return comment.id===id});if(comment_index===-1){throw new Error("Comment not found")}var deleted_comment=db.comments[comment_index];db.comments.splice(comment_index,1);pubsub.publish("commentDeleted",{commentDeleted:deleted_comment});pubsub.publish("commentCount",{commentCount:db.comments.length});return deleted_comment},deleteAllComments:function deleteAllComments(_,__,_ref21){var pubsub=_ref21.pubsub,db=_ref21.db;var length=db.comments.length;db.comments.splice(0,length);pubsub.publish("commentCount",{commentCount:db.comments.length});return{count:length}}};