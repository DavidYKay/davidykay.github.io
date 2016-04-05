#ignore /^_site/ # NOTE: this can interfere with Guard::LiveReload
#
#guard "jekyll-plus" do
#  watch /.*/
#end

#guard 'livereload' do
#  watch(/^_site/)
#end
#
guard 'jekyll-plus', :serve => true do
  watch /.*/
  ignore /^_site/
end

guard 'livereload' do
  watch /.*/
end
