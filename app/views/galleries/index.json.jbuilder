json.gallery do
  json.id @gallery.id
  json.name @gallery.name
  json.description @gallery.description
  json.photos @gallery.photos do |photo|
    json.url photo.url
  end
end