class RemoveDurationFromTracks < ActiveRecord::Migration[5.2]
  def change
    remove_column :tracks, :duration
  end
end
