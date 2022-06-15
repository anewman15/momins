class CreateGalleries < ActiveRecord::Migration[6.1]
  def change
    create_table :galleries do |t|
      t.string :name, null: false, default: ''
      t.string :description, null: false, default: ''

      t.timestamps
    end

    add_index :galleries, :name, unique: true
  end
end
