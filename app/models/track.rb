# == Schema Information
#
# Table name: tracks
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  genre       :string
#  duration    :integer          not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Track < ApplicationRecord
  validates :user_id, :title, :duration, presence: true

  has_one_attached :audio_file
  has_one_attached :image
end
