class CreateMassages < ActiveRecord::Migration[5.0]
  def change
    create_table :massages do |t|
      t.text     :boby
      t.string   :image
      t.references  :user, foreign_key: true, null: false
      t.references  :group, foreign_key: true, null: false
      t.timestamps
    end
  end
end
