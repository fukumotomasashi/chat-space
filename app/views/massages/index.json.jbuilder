if @new_massages.present?
  json.array! @new_massages.each do |message|
  json.boby  message.boby
  json.image    message.image.url
  json.id       message.id
  json.name     message.user.name
  json.created_at  created_time(message.created_at)
  end
end
