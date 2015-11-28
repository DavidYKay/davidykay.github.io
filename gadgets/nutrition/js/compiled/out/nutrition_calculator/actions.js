// Compiled by ClojureScript 0.0-3297 {}
goog.provide('nutrition_calculator.actions');
goog.require('cljs.core');
goog.require('nutrition_calculator.session');
if(typeof nutrition_calculator.actions.id_counters !== 'undefined'){
} else {
nutrition_calculator.actions.id_counters = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"condition","condition",1668437652),cljs.core.atom.call(null,(1)),new cljs.core.Keyword(null,"medication","medication",22300895),cljs.core.atom.call(null,(1))], null);
}
nutrition_calculator.actions.new_id = (function nutrition_calculator$actions$new_id(t){
var a = cljs.core.get.call(null,nutrition_calculator.actions.id_counters,t);
var id = cljs.core.deref.call(null,a);
cljs.core.swap_BANG_.call(null,a,cljs.core.inc);

return id;
});
nutrition_calculator.actions.add_condition = (function nutrition_calculator$actions$add_condition(name){
var map__6584 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"id","id",-1388402092),nutrition_calculator.actions.new_id.call(null,new cljs.core.Keyword(null,"condition","condition",1668437652))], null);
var map__6584__$1 = ((cljs.core.seq_QMARK_.call(null,map__6584))?cljs.core.apply.call(null,cljs.core.hash_map,map__6584):map__6584);
var condition = map__6584__$1;
var id = cljs.core.get.call(null,map__6584__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.swap_BANG_.call(null,nutrition_calculator.session.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conditions","conditions",-1647236270),id], null),condition);
});
nutrition_calculator.actions.add_medication = (function nutrition_calculator$actions$add_medication(name){
var map__6586 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"id","id",-1388402092),nutrition_calculator.actions.new_id.call(null,new cljs.core.Keyword(null,"medication","medication",22300895)),new cljs.core.Keyword(null,"conditions","conditions",-1647236270),cljs.core.PersistentArrayMap.EMPTY], null);
var map__6586__$1 = ((cljs.core.seq_QMARK_.call(null,map__6586))?cljs.core.apply.call(null,cljs.core.hash_map,map__6586):map__6586);
var medication = map__6586__$1;
var id = cljs.core.get.call(null,map__6586__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.swap_BANG_.call(null,nutrition_calculator.session.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medications","medications",-889403285),id], null),medication);
});
nutrition_calculator.actions.mapify = (function nutrition_calculator$actions$mapify(v){
return cljs.core.reduce.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p1__6587_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first.call(null,p1__6587_SHARP_)],[cljs.core.last.call(null,p1__6587_SHARP_)]);
}),v));
});
nutrition_calculator.actions.delete_condition = (function nutrition_calculator$actions$delete_condition(cid){
return cljs.core.swap_BANG_.call(null,nutrition_calculator.session.app_state,(function (p__6600){
var map__6601 = p__6600;
var map__6601__$1 = ((cljs.core.seq_QMARK_.call(null,map__6601))?cljs.core.apply.call(null,cljs.core.hash_map,map__6601):map__6601);
var old = map__6601__$1;
var conditions = cljs.core.get.call(null,map__6601__$1,new cljs.core.Keyword(null,"conditions","conditions",-1647236270));
var medications = cljs.core.get.call(null,map__6601__$1,new cljs.core.Keyword(null,"medications","medications",-889403285));
var new_meds = (function (){var iter__5061__auto__ = ((function (map__6601,map__6601__$1,old,conditions,medications){
return (function nutrition_calculator$actions$delete_condition_$_iter__6602(s__6603){
return (new cljs.core.LazySeq(null,((function (map__6601,map__6601__$1,old,conditions,medications){
return (function (){
var s__6603__$1 = s__6603;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__6603__$1);
if(temp__4425__auto__){
var s__6603__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6603__$2)){
var c__5059__auto__ = cljs.core.chunk_first.call(null,s__6603__$2);
var size__5060__auto__ = cljs.core.count.call(null,c__5059__auto__);
var b__6605 = cljs.core.chunk_buffer.call(null,size__5060__auto__);
if((function (){var i__6604 = (0);
while(true){
if((i__6604 < size__5060__auto__)){
var vec__6608 = cljs.core._nth.call(null,c__5059__auto__,i__6604);
var k = cljs.core.nth.call(null,vec__6608,(0),null);
var medication = cljs.core.nth.call(null,vec__6608,(1),null);
cljs.core.chunk_append.call(null,b__6605,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.update_in.call(null,medication,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conditions","conditions",-1647236270)], null),((function (i__6604,vec__6608,k,medication,c__5059__auto__,size__5060__auto__,b__6605,s__6603__$2,temp__4425__auto__,map__6601,map__6601__$1,old,conditions,medications){
return (function (p1__6588_SHARP_){
return cljs.core.dissoc.call(null,p1__6588_SHARP_,cid);
});})(i__6604,vec__6608,k,medication,c__5059__auto__,size__5060__auto__,b__6605,s__6603__$2,temp__4425__auto__,map__6601,map__6601__$1,old,conditions,medications))
)], null));

var G__6610 = (i__6604 + (1));
i__6604 = G__6610;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6605),nutrition_calculator$actions$delete_condition_$_iter__6602.call(null,cljs.core.chunk_rest.call(null,s__6603__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6605),null);
}
} else {
var vec__6609 = cljs.core.first.call(null,s__6603__$2);
var k = cljs.core.nth.call(null,vec__6609,(0),null);
var medication = cljs.core.nth.call(null,vec__6609,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.update_in.call(null,medication,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conditions","conditions",-1647236270)], null),((function (vec__6609,k,medication,s__6603__$2,temp__4425__auto__,map__6601,map__6601__$1,old,conditions,medications){
return (function (p1__6588_SHARP_){
return cljs.core.dissoc.call(null,p1__6588_SHARP_,cid);
});})(vec__6609,k,medication,s__6603__$2,temp__4425__auto__,map__6601,map__6601__$1,old,conditions,medications))
)], null),nutrition_calculator$actions$delete_condition_$_iter__6602.call(null,cljs.core.rest.call(null,s__6603__$2)));
}
} else {
return null;
}
break;
}
});})(map__6601,map__6601__$1,old,conditions,medications))
,null,null));
});})(map__6601,map__6601__$1,old,conditions,medications))
;
return iter__5061__auto__.call(null,cljs.core.seq.call(null,medications));
})();
var new_conds = cljs.core.remove.call(null,((function (new_meds,map__6601,map__6601__$1,old,conditions,medications){
return (function (p1__6589_SHARP_){
return cljs.core._EQ_.call(null,cid,cljs.core.first.call(null,p1__6589_SHARP_));
});})(new_meds,map__6601,map__6601__$1,old,conditions,medications))
,cljs.core.seq.call(null,conditions));
var new_state = cljs.core.assoc.call(null,cljs.core.assoc.call(null,old,new cljs.core.Keyword(null,"medications","medications",-889403285),nutrition_calculator.actions.mapify.call(null,new_meds)),new cljs.core.Keyword(null,"conditions","conditions",-1647236270),nutrition_calculator.actions.mapify.call(null,new_conds));
return new_state;
}));
});
nutrition_calculator.actions.add_condition_to_medication = (function nutrition_calculator$actions$add_condition_to_medication(p__6611,cid){
var map__6613 = p__6611;
var map__6613__$1 = ((cljs.core.seq_QMARK_.call(null,map__6613))?cljs.core.apply.call(null,cljs.core.hash_map,map__6613):map__6613);
var medication = map__6613__$1;
var mid = cljs.core.get.call(null,map__6613__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.swap_BANG_.call(null,nutrition_calculator.session.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medications","medications",-889403285),mid,new cljs.core.Keyword(null,"conditions","conditions",-1647236270),cid], null),cid);
});
nutrition_calculator.actions.remove_condition_from_medication = (function nutrition_calculator$actions$remove_condition_from_medication(p__6615,cid){
var map__6617 = p__6615;
var map__6617__$1 = ((cljs.core.seq_QMARK_.call(null,map__6617))?cljs.core.apply.call(null,cljs.core.hash_map,map__6617):map__6617);
var medication = map__6617__$1;
var mid = cljs.core.get.call(null,map__6617__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.swap_BANG_.call(null,nutrition_calculator.session.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medications","medications",-889403285),mid,new cljs.core.Keyword(null,"conditions","conditions",-1647236270)], null),((function (map__6617,map__6617__$1,medication,mid){
return (function (p1__6614_SHARP_){
return cljs.core.dissoc.call(null,p1__6614_SHARP_,cid);
});})(map__6617,map__6617__$1,medication,mid))
);
});
nutrition_calculator.actions.set_compliance = (function nutrition_calculator$actions$set_compliance(p__6618,status){
var map__6620 = p__6618;
var map__6620__$1 = ((cljs.core.seq_QMARK_.call(null,map__6620))?cljs.core.apply.call(null,cljs.core.hash_map,map__6620):map__6620);
var medication = map__6620__$1;
var mid = cljs.core.get.call(null,map__6620__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.swap_BANG_.call(null,nutrition_calculator.session.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medications","medications",-889403285),mid,new cljs.core.Keyword(null,"compliance-status","compliance-status",-928408153)], null),status);
});
