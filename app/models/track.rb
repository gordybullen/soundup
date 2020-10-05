# == Schema Information
#
# Table name: tracks
#
#  id          :bigint           not null, primary key
#  description :text
#  genre       :string
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer          not null
#
# Indexes
#
#  index_tracks_on_title    (title)
#  index_tracks_on_user_id  (user_id)
#
class Track < ApplicationRecord
  validates :user_id, :title, presence: true

  validate :ensure_audio_file
  validate :ensure_image_file
  
  has_one_attached :audio_file
  has_one_attached :image_file

  has_many :comments,
    primary_key: :id,
    foreign_key: :track_id,
    class_name: :Comment

  def ensure_audio_file
    unless self.audio_file.attached?
      errors[:audio_file] << "Must be attached"
    end
  end

  def ensure_image_file
    unless self.image_file.attached?
      errors[:image_file] << "Must be attached"
    end
  end
end
