# == Schema Information
#
# Table name: tracks
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  genre       :string
#  duration    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text
#
class Track < ApplicationRecord
  validates :user_id, :title, :duration, presence: true

  has_one_connected :track
end
