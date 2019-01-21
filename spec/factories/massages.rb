FactoryBot.define do
  factory :massage do
    boby Faker::Lorem.sentence
    image File.open("#{Rails.root}/public/aaa.png")
    user
    group
  end
end
