# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
gallery = Gallery.create(name: 'Momins', description: 'Moments of incessant creation. Inexhaustible creativity...')
10.times do |i|
  gallery.photos.attach(io:
    File.open("public/images/momins#{i}.jpeg"), filename: "momins#{i}.jpeg", content_type: 'image/jpeg')
end
