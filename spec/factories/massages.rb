FactoryGirl.define do
  factory :massage do
    boby Faker::Lorem.sentence
    image File.open("#{Rails.root}/public/uploads/massage/image/2/ブログ指示書.png")
    user
    group
  end
end
