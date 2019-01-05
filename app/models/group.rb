class Group < ApplicationRecord
  has_many :users, through: :members
  has_many :massages
  has_many :members
  validates :name, presence: true

  def show_last_message
    if (last_message = massages.last).present?
      last_message.boby? ? last_message.boby : '画像が投稿されています'
    else
      'まだメッセージはありません。'
    end
  end
end
