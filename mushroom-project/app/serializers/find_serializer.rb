class FindSerializer < ActiveModel::Serializer
  attributes :id, :image, :common_name, :latin_name, :notes, :date
end
