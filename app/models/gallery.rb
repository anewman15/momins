class Gallery < ApplicationRecord
  validates :name, presence: true, length: { in: 5..70 }
  validates :description, presence: true, length: { in: 5..1500 }

  has_many_attached :photos
end
