class Massage < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validates :boby, presence: true, unless: :image?
  mount_uploader :image, ImageUploader
end
