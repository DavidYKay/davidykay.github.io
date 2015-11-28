// Compiled by ClojureScript 0.0-3297 {}
goog.provide('nutrition_calculator.model.romaniello.alpha');
goog.require('cljs.core');
goog.require('nutrition_calculator.helpers.math');
goog.require('nutrition_calculator.model.romaniello.common');

/**
* @constructor
* @param {*} phase
* @param {*} week
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
nutrition_calculator.model.romaniello.alpha.Time = (function (phase,week,__meta,__extmap,__hash){
this.phase = phase;
this.week = week;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
nutrition_calculator.model.romaniello.alpha.Time.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4902__auto__,k__4903__auto__){
var self__ = this;
var this__4902__auto____$1 = this;
return cljs.core._lookup.call(null,this__4902__auto____$1,k__4903__auto__,null);
});

nutrition_calculator.model.romaniello.alpha.Time.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4904__auto__,k6571,else__4905__auto__){
var self__ = this;
var this__4904__auto____$1 = this;
var G__6573 = (((k6571 instanceof cljs.core.Keyword))?k6571.fqn:null);
switch (G__6573) {
case "phase":
return self__.phase;

break;
case "week":
return self__.week;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k6571,else__4905__auto__);

}
});

nutrition_calculator.model.romaniello.alpha.Time.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4916__auto__,writer__4917__auto__,opts__4918__auto__){
var self__ = this;
var this__4916__auto____$1 = this;
var pr_pair__4919__auto__ = ((function (this__4916__auto____$1){
return (function (keyval__4920__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4917__auto__,cljs.core.pr_writer,""," ","",opts__4918__auto__,keyval__4920__auto__);
});})(this__4916__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4917__auto__,pr_pair__4919__auto__,"#nutrition-calculator.model.romaniello.alpha.Time{",", ","}",opts__4918__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"phase","phase",575722892),self__.phase],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"week","week",-1326473278),self__.week],null))], null),self__.__extmap));
});

nutrition_calculator.model.romaniello.alpha.Time.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4900__auto__){
var self__ = this;
var this__4900__auto____$1 = this;
return self__.__meta;
});

nutrition_calculator.model.romaniello.alpha.Time.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4896__auto__){
var self__ = this;
var this__4896__auto____$1 = this;
return (new nutrition_calculator.model.romaniello.alpha.Time(self__.phase,self__.week,self__.__meta,self__.__extmap,self__.__hash));
});

nutrition_calculator.model.romaniello.alpha.Time.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4906__auto__){
var self__ = this;
var this__4906__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

nutrition_calculator.model.romaniello.alpha.Time.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4897__auto__){
var self__ = this;
var this__4897__auto____$1 = this;
var h__4723__auto__ = self__.__hash;
if(!((h__4723__auto__ == null))){
return h__4723__auto__;
} else {
var h__4723__auto____$1 = cljs.core.hash_imap.call(null,this__4897__auto____$1);
self__.__hash = h__4723__auto____$1;

return h__4723__auto____$1;
}
});

nutrition_calculator.model.romaniello.alpha.Time.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4898__auto__,other__4899__auto__){
var self__ = this;
var this__4898__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4295__auto__ = other__4899__auto__;
if(cljs.core.truth_(and__4295__auto__)){
var and__4295__auto____$1 = (this__4898__auto____$1.constructor === other__4899__auto__.constructor);
if(and__4295__auto____$1){
return cljs.core.equiv_map.call(null,this__4898__auto____$1,other__4899__auto__);
} else {
return and__4295__auto____$1;
}
} else {
return and__4295__auto__;
}
})())){
return true;
} else {
return false;
}
});

nutrition_calculator.model.romaniello.alpha.Time.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4911__auto__,k__4912__auto__){
var self__ = this;
var this__4911__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"week","week",-1326473278),null,new cljs.core.Keyword(null,"phase","phase",575722892),null], null), null),k__4912__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4911__auto____$1),self__.__meta),k__4912__auto__);
} else {
return (new nutrition_calculator.model.romaniello.alpha.Time(self__.phase,self__.week,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4912__auto__)),null));
}
});

nutrition_calculator.model.romaniello.alpha.Time.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4909__auto__,k__4910__auto__,G__6570){
var self__ = this;
var this__4909__auto____$1 = this;
var pred__6574 = cljs.core.keyword_identical_QMARK_;
var expr__6575 = k__4910__auto__;
if(cljs.core.truth_(pred__6574.call(null,new cljs.core.Keyword(null,"phase","phase",575722892),expr__6575))){
return (new nutrition_calculator.model.romaniello.alpha.Time(G__6570,self__.week,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6574.call(null,new cljs.core.Keyword(null,"week","week",-1326473278),expr__6575))){
return (new nutrition_calculator.model.romaniello.alpha.Time(self__.phase,G__6570,self__.__meta,self__.__extmap,null));
} else {
return (new nutrition_calculator.model.romaniello.alpha.Time(self__.phase,self__.week,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4910__auto__,G__6570),null));
}
}
});

nutrition_calculator.model.romaniello.alpha.Time.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4914__auto__){
var self__ = this;
var this__4914__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"phase","phase",575722892),self__.phase],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"week","week",-1326473278),self__.week],null))], null),self__.__extmap));
});

nutrition_calculator.model.romaniello.alpha.Time.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4901__auto__,G__6570){
var self__ = this;
var this__4901__auto____$1 = this;
return (new nutrition_calculator.model.romaniello.alpha.Time(self__.phase,self__.week,G__6570,self__.__extmap,self__.__hash));
});

nutrition_calculator.model.romaniello.alpha.Time.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4907__auto__,entry__4908__auto__){
var self__ = this;
var this__4907__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4908__auto__)){
return cljs.core._assoc.call(null,this__4907__auto____$1,cljs.core._nth.call(null,entry__4908__auto__,(0)),cljs.core._nth.call(null,entry__4908__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4907__auto____$1,entry__4908__auto__);
}
});

nutrition_calculator.model.romaniello.alpha.Time.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"phase","phase",-2078712877,null),new cljs.core.Symbol(null,"week","week",314058249,null)], null);
});

nutrition_calculator.model.romaniello.alpha.Time.cljs$lang$type = true;

nutrition_calculator.model.romaniello.alpha.Time.cljs$lang$ctorPrSeq = (function (this__4936__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"nutrition-calculator.model.romaniello.alpha/Time");
});

nutrition_calculator.model.romaniello.alpha.Time.cljs$lang$ctorPrWriter = (function (this__4936__auto__,writer__4937__auto__){
return cljs.core._write.call(null,writer__4937__auto__,"nutrition-calculator.model.romaniello.alpha/Time");
});

nutrition_calculator.model.romaniello.alpha.__GT_Time = (function nutrition_calculator$model$romaniello$alpha$__GT_Time(phase,week){
return (new nutrition_calculator.model.romaniello.alpha.Time(phase,week,null,null,null));
});

nutrition_calculator.model.romaniello.alpha.map__GT_Time = (function nutrition_calculator$model$romaniello$alpha$map__GT_Time(G__6572){
return (new nutrition_calculator.model.romaniello.alpha.Time(new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(G__6572),new cljs.core.Keyword(null,"week","week",-1326473278).cljs$core$IFn$_invoke$arity$1(G__6572),null,cljs.core.dissoc.call(null,G__6572,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"week","week",-1326473278)),null));
});

nutrition_calculator.model.romaniello.alpha.target_calories = (function nutrition_calculator$model$romaniello$alpha$target_calories(t,vitals){
var maintenance_cals = nutrition_calculator.model.romaniello.common.maintenance_calories.call(null,vitals);
var phase = nutrition_calculator.model.romaniello.alpha.keywordized_phase.call(null,t);
var lookup_table = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rest","rest",-1241696419),(maintenance_cals - (500)),new cljs.core.Keyword(null,"workout","workout",280057936),(maintenance_cals - (300))], null),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rest","rest",-1241696419),(maintenance_cals - (600)),new cljs.core.Keyword(null,"workout","workout",280057936),(maintenance_cals - (200))], null)], null);
return phase.call(null,lookup_table);
});
nutrition_calculator.model.romaniello.alpha.daily_protein = (function nutrition_calculator$model$romaniello$alpha$daily_protein(t,vitals){

var lookup_table = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"1","1",-521621649),(function (lbm){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"workout","workout",280057936),nutrition_calculator.helpers.math.round.call(null,(0.8 * lbm)),new cljs.core.Keyword(null,"rest","rest",-1241696419),nutrition_calculator.helpers.math.round.call(null,(0.7 * lbm))], null);
}),new cljs.core.Keyword(null,"2","2",-1645882217),(function (lbm){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"workout","workout",280057936),nutrition_calculator.helpers.math.round.call(null,(1.0 * lbm)),new cljs.core.Keyword(null,"rest","rest",-1241696419),nutrition_calculator.helpers.math.round.call(null,(0.8 * lbm))], null);
})], null);
var lbm = nutrition_calculator.model.romaniello.alpha.lbm.call(null,vitals);
var phase = nutrition_calculator.model.romaniello.alpha.keywordized_phase.call(null,t);
return phase.call(null,lookup_table).call(null,lbm);
});
nutrition_calculator.model.romaniello.alpha.daily_carb = (function nutrition_calculator$model$romaniello$alpha$daily_carb(t,vitals){

var phase = nutrition_calculator.model.romaniello.alpha.keywordized_phase.call(null,t);
var week = new cljs.core.Keyword(null,"week","week",-1326473278).cljs$core$IFn$_invoke$arity$1(t);
var zero_based_week = (week - (1));
var lbm = nutrition_calculator.model.romaniello.alpha.lbm.call(null,vitals);
var lookup_table = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"1","1",-521621649),((function (phase,week,zero_based_week,lbm){
return (function (w){
nutrition_calculator.model.romaniello.alpha.phase_1_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"workout","workout",280057936),(30),new cljs.core.Keyword(null,"rest","rest",-1241696419),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"workout","workout",280057936),(30),new cljs.core.Keyword(null,"rest","rest",-1241696419),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"workout","workout",280057936),(75),new cljs.core.Keyword(null,"rest","rest",-1241696419),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"workout","workout",280057936),(100),new cljs.core.Keyword(null,"rest","rest",-1241696419),(50)], null)], null);

return nutrition_calculator.model.romaniello.alpha.phase_1_table.call(null,w);
});})(phase,week,zero_based_week,lbm))
,new cljs.core.Keyword(null,"2","2",-1645882217),((function (phase,week,zero_based_week,lbm){
return (function (w){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"workout","workout",280057936),nutrition_calculator.helpers.math.round.call(null,(0.75 * lbm)),new cljs.core.Keyword(null,"rest","rest",-1241696419),nutrition_calculator.helpers.math.round.call(null,(0.3 * lbm))], null);
});})(phase,week,zero_based_week,lbm))
], null);
return phase.call(null,lookup_table).call(null,zero_based_week);
});
nutrition_calculator.model.romaniello.alpha.grams_to_calories = (function nutrition_calculator$model$romaniello$alpha$grams_to_calories(nutrient,grams){
nutrition_calculator.model.romaniello.alpha.simple_calc = (function nutrition_calculator$model$romaniello$alpha$grams_to_calories_$_simple_calc(gram){
nutrition_calculator.model.romaniello.alpha.lookup_table = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"carb","carb",839253535),(4),new cljs.core.Keyword(null,"fat","fat",-756798484),(9),new cljs.core.Keyword(null,"protein","protein",184296952),(4)], null);

var cals_per_gram = nutrition_calculator.model.romaniello.alpha.lookup_table.call(null,nutrient);
return (cals_per_gram * gram);
});

if(cljs.core.map_QMARK_.call(null,grams)){
return nutrition_calculator.model.romaniello.alpha.update_values.call(null,grams,nutrition_calculator.model.romaniello.alpha.simple_calc);
} else {
return nutrition_calculator.model.romaniello.alpha.simple_calc.call(null,grams);
}
});
nutrition_calculator.model.romaniello.alpha.sum_calories = (function nutrition_calculator$model$romaniello$alpha$sum_calories(){
var argseq__5347__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return nutrition_calculator.model.romaniello.alpha.sum_calories.cljs$core$IFn$_invoke$arity$variadic(argseq__5347__auto__);
});

nutrition_calculator.model.romaniello.alpha.sum_calories.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core._PLUS_,args);
});

nutrition_calculator.model.romaniello.alpha.sum_calories.cljs$lang$maxFixedArity = (0);

nutrition_calculator.model.romaniello.alpha.sum_calories.cljs$lang$applyTo = (function (seq6578){
return nutrition_calculator.model.romaniello.alpha.sum_calories.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6578));
});
nutrition_calculator.model.romaniello.alpha.subtract_calories = (function nutrition_calculator$model$romaniello$alpha$subtract_calories(){
var argseq__5347__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return nutrition_calculator.model.romaniello.alpha.subtract_calories.cljs$core$IFn$_invoke$arity$variadic(argseq__5347__auto__);
});

nutrition_calculator.model.romaniello.alpha.subtract_calories.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core._,args);
});

nutrition_calculator.model.romaniello.alpha.subtract_calories.cljs$lang$maxFixedArity = (0);

nutrition_calculator.model.romaniello.alpha.subtract_calories.cljs$lang$applyTo = (function (seq6579){
return nutrition_calculator.model.romaniello.alpha.subtract_calories.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6579));
});
nutrition_calculator.model.romaniello.alpha.divide_calories = (function nutrition_calculator$model$romaniello$alpha$divide_calories(m,n){
return nutrition_calculator.model.romaniello.alpha.update_values.call(null,m,(function (p1__6580_SHARP_){
return (nutrition_calculator.helpers.math.round.call(null,(p1__6580_SHARP_ / n)) | (0));
}));
});
nutrition_calculator.model.romaniello.alpha.daily_fat = (function nutrition_calculator$model$romaniello$alpha$daily_fat(t,vitals){

var phase = nutrition_calculator.model.romaniello.alpha.keywordized_phase.call(null,t);
var week = new cljs.core.Keyword(null,"week","week",-1326473278).cljs$core$IFn$_invoke$arity$1(t);
var carb_grams = nutrition_calculator.model.romaniello.alpha.daily_carb.call(null,t,vitals);
var protein_grams = nutrition_calculator.model.romaniello.alpha.daily_protein.call(null,t,vitals);
var carb_cals = nutrition_calculator.model.romaniello.alpha.grams_to_calories.call(null,new cljs.core.Keyword(null,"carb","carb",839253535),carb_grams);
var protein_cals = nutrition_calculator.model.romaniello.alpha.grams_to_calories.call(null,new cljs.core.Keyword(null,"protein","protein",184296952),protein_grams);
var target_cals = nutrition_calculator.model.romaniello.alpha.target_calories.call(null,t,vitals);
var cal_subtotal = nutrition_calculator.model.romaniello.alpha.sum_calories.call(null,carb_cals,protein_cals);
var cal_remaining = nutrition_calculator.model.romaniello.alpha.subtract_calories.call(null,target_cals,cal_subtotal);
var fat_grams = nutrition_calculator.model.romaniello.alpha.divide_calories.call(null,cal_remaining,(9));
return fat_grams;
});
nutrition_calculator.model.romaniello.alpha.daily_diet = (function nutrition_calculator$model$romaniello$alpha$daily_diet(t,vitals){

var phase = nutrition_calculator.model.romaniello.alpha.keywordized_phase.call(null,t);
var week = new cljs.core.Keyword(null,"week","week",-1326473278).cljs$core$IFn$_invoke$arity$1(t);
var carb_grams = nutrition_calculator.model.romaniello.alpha.daily_carb.call(null,t,vitals);
var protein_grams = nutrition_calculator.model.romaniello.alpha.daily_protein.call(null,t,vitals);
var carb_cals = nutrition_calculator.model.romaniello.alpha.grams_to_calories.call(null,new cljs.core.Keyword(null,"carb","carb",839253535),carb_grams);
var protein_cals = nutrition_calculator.model.romaniello.alpha.grams_to_calories.call(null,new cljs.core.Keyword(null,"protein","protein",184296952),protein_grams);
var target_cals = nutrition_calculator.model.romaniello.alpha.target_calories.call(null,t,vitals);
var cal_subtotal = nutrition_calculator.model.romaniello.alpha.sum_calories.call(null,carb_cals,protein_cals);
var cal_remaining = nutrition_calculator.model.romaniello.alpha.subtract_calories.call(null,target_cals,cal_subtotal);
var fat_grams = nutrition_calculator.model.romaniello.alpha.divide_calories.call(null,cal_remaining,(9));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"workout","workout",280057936),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"carb","carb",839253535),new cljs.core.Keyword(null,"workout","workout",280057936).cljs$core$IFn$_invoke$arity$1(carb_grams),new cljs.core.Keyword(null,"protein","protein",184296952),new cljs.core.Keyword(null,"workout","workout",280057936).cljs$core$IFn$_invoke$arity$1(protein_grams),new cljs.core.Keyword(null,"fat","fat",-756798484),new cljs.core.Keyword(null,"workout","workout",280057936).cljs$core$IFn$_invoke$arity$1(fat_grams),new cljs.core.Keyword(null,"calories","calories",-363399197),new cljs.core.Keyword(null,"workout","workout",280057936).cljs$core$IFn$_invoke$arity$1(target_cals)], null),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"carb","carb",839253535),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(carb_grams),new cljs.core.Keyword(null,"protein","protein",184296952),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(protein_grams),new cljs.core.Keyword(null,"fat","fat",-756798484),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(fat_grams),new cljs.core.Keyword(null,"calories","calories",-363399197),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(target_cals)], null)], null);
});
